import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudOperationRouting } from './crud-operation/crud-operation-routing.module';
import { FirebaseStorageModule } from './firebase-storage/firebase-storage.module';
import { SocialLoginModule } from './social-login/social-login.module';
import { FirebaseSignupModule } from './firebase-signup/firebase-signup.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudOperationRouting,
    FirebaseStorageModule,
    SocialLoginModule,
    FirebaseSignupModule
  ]
})
export class FirebaseModule { }
