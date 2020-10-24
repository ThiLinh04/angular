import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SignupComponent} from "src/app/authentication/signup/signup.component"

@Injectable({
  providedIn: 'root'
})
//gắn SignupComponent
export class SignupGuard implements CanDeactivate<SignupComponent> {
  // constructor(){}
  canDeactivate(
    component: SignupComponent, //gắn vào
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // dùng để ngăn chặn người dùng rời khỏi 
      // return về true => cho phép rời khỏi
    const isDirty= component.checkDirtyForm();
    if(isDirty){
      return confirm('Bạn có chắc muốn rời khỏi');
    }
    return true;
    
  }
  
}
