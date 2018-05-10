import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule],
  exports: [LoginComponent, RouterModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
