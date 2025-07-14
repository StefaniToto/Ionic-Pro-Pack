import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-signup-template-1',
  templateUrl: './login-signup-template-1.component.html',
  styleUrls: ['./login-signup-template-1.component.scss'],
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class LoginSignupTemplate1Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

  signInAnonymously() {

  }

  signin() {

  }


  password: any;
  email: any;

  forgotPassword() {

  }
}
