import { SignupComponent } from '../app/signupForm/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'form', component: SignupComponent},
    { path: '', component: LoginComponent}
  ];
