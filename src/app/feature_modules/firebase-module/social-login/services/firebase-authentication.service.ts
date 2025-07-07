import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserDataService } from './user-data.service';
import { LoginUtilService } from './util.service';
import { take } from 'rxjs/operators';

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
    public fireAuth: AngularFireAuth,
    public userDataServ: UserDataService,
    public util: LoginUtilService
  ) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log('Firebase user - '+user);
        this.current_user = user;
      }
    });

    this.fireAuth.authState.pipe(take(1)).subscribe(user => {
      if (user) {
        this.authInfo$.next(new AuthInfo(user.uid));
      }
    });
  }
  public forgotPassoword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      this.util.presentToast('Email Sent', true, 'bottom', 2100);
    }).catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));

  }

  public signInAnonymously() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.signInAnonymously().then((userData) => {
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
      this.fireAuth.createUserWithEmailAndPassword(email, password)
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
      this.fireAuth.signInWithEmailAndPassword(email, password)
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
    return this.fireAuth.signOut();
  }
  public checkAuth() {
    return new Promise((resolve) => {
      this.fireAuth.authState.subscribe(user => {
        resolve(user);
      });
    });
  }
  public loginWithFacebook(accessToken) {
    const credential = firebase.auth.FacebookAuthProvider
      .credential(accessToken);
    return this.fireAuth.signInWithCredential(credential);
  }
  public fbLogin(): Promise<any> {
    return this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  public loginWithTwitter(accessToken, accessSecret) {
    const credential = firebase.auth.TwitterAuthProvider
      .credential(accessToken, accessSecret);
    return this.fireAuth.signInWithCredential(credential);
  }
  public twitterLogin(): Promise<any> {
    return this.fireAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }
  public loginWithGoogle(accessToken, accessSecret) {
    // eslint-disable-next-line multiline-ternary
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
      .credential(accessToken);
    return this.fireAuth.signInWithCredential(credential);
  }
  public googleLogin(): Promise<any> {
    return this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
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
