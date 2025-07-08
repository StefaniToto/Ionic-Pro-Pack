import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDataService } from './user-data.service';
import { LoginUtilService } from './util.service';
import { take } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {
  authState,
  createUserWithEmailAndPassword,
  getAuth, sendPasswordResetEmail, signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup, signOut
} from "@angular/fire/auth";
import {initializeApp} from "@angular/fire/app";
import config from "../../../../../../capacitor.config";


const app = initializeApp(config);
const auth = getAuth(app);
export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthenticationService.UNKNOWN_USER);
  public current_user: any;
  constructor(
    public userDataServ: UserDataService,
    public util: LoginUtilService
  ) {

    authState(auth).subscribe(user => {
      if (user) {
        console.log('Firebase user - '+user);
        this.current_user = user;
      }
    });

    authState(auth).pipe(take(1)).subscribe(user => {
      if (user) {
        this.authInfo$.next(new AuthInfo(user.uid));
      }
    });
  }
  public forgotPassoword(email: string) {
    sendPasswordResetEmail(auth,email).then(() => {
      this.util.presentToast('Email Sent', true, 'bottom', 2100);
    }).catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));

  }

  public signInAnonymously() {
    return new Promise<any>((resolve, reject) => {
      this.signInAnonymously().then((userData) => {
        this.authInfo$.next(new AuthInfo(userData.user.uid));
        resolve(userData.user);
      }).catch((error) => {
        /* eslint-disable */
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`login failed ${error.message}`);
      });
    });
  }

  public createAccount(email: string, password: string): Promise<any> {
    return new Promise<any>((resolved, rejected) => {
     createUserWithEmailAndPassword(auth,email, password)
        .then(res => {
          if (res.user) {
            this.authInfo$.next(new AuthInfo(res.user.uid));
            this.userDataServ.create({
              email,
              id: res.user.uid,
              username: res.user.displayName
            });
            resolved(res.user);
          }
        })
        .catch(err => {

          this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
          // eslint-disable-next-line prefer-promise-reject-errors
          rejected(`creation failed ${err}`);
        });
    });
  }

  public login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolved, rejected) => {
      signInWithEmailAndPassword(auth,email, password)
        .then(res => {
          if (res.user) {
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolved(res.user);
          }
        })
        .catch(err => {

          this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
          // eslint-disable-next-line prefer-promise-reject-errors
          rejected(`login failed ${err}`);
        });
    });
  }

  public logout(): Promise<void> {
    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
    return signOut(auth).then(() => {});
  }
  public checkAuth() {
    return new Promise((resolve) => {
    authState(auth).subscribe(user => {
        resolve(user);
      });
    });
  }
  public loginWithFacebook(accessToken) {
    const credential = firebase.auth.FacebookAuthProvider
      .credential(accessToken);
    return signInWithCredential(auth,credential);
  }
  public fbLogin(): Promise<any> {
    return signInWithPopup(auth,new firebase.auth.FacebookAuthProvider());
  }
  public loginWithTwitter(accessToken, accessSecret) {
    const credential = firebase.auth.TwitterAuthProvider
      .credential(accessToken, accessSecret);
    return signInWithCredential(auth,credential);
  }
  public twitterLogin(): Promise<any> {
    return signInWithPopup(auth,new firebase.auth.TwitterAuthProvider());
  }
  public loginWithGoogle(accessToken, accessSecret) {
    // eslint-disable-next-line multiline-ternary
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
      .credential(accessToken);
    return signInWithCredential(auth,credential);
  }
  public googleLogin(): Promise<any> {
    return signInWithPopup(auth,new firebase.auth.GoogleAuthProvider());
  }
  public createSocialLoginUser(user): Promise<any> {
    this.authInfo$.next(new AuthInfo(user.uid));
    return this.userDataServ.create({
      email: user.email,
      id: user.uid,
      username: user.displayName
    });
  }
}
