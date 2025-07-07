import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
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
  constructor(public fireAuth: AngularFireAuth,) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log('Firebase User - '+user);
        this.current_user = user;
      }
    });

    this.fireAuth.authState.pipe(take(1)).subscribe(user => {
      if (user) {
        this.authInfo$.next(new AuthInfo(user.uid));
      }
    });
  }

  public checkAuth() {
    return new Promise((resolve) => {
      this.fireAuth.authState.subscribe(user => {
        resolve(user);
      });
    });
  }
}
