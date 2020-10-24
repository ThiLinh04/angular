import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from "@angular/router"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {SignupGuard} from "src/app/core/guards/signup.guard"
const routes: Routes=[
  {
    path:"", component: AuthenticationComponent, 
    children:[
      {path:'signin', component: SigninComponent},
      {path:'signup', canDeactivate:[SignupGuard], component: SignupComponent},

    ]
  }
]

@NgModule({
  declarations: [AuthenticationComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
