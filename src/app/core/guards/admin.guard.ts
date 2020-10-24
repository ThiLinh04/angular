import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:  Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //dùng để bảo vệ router khi người dùng muốn truy cập vào
    // return true-> cho phép truy cập vào

    const userInfo=localStorage.getItem('userInfo')
    if(userInfo){
       const {maLoaiNguoiDung}= JSON.parse(userInfo);
       if(maLoaiNguoiDung==='QuanTri'){
         //la Admin
         return true;
       }
       //khác quản trị-> redirect về homepage
       this.router.navigate(['/']);
       return false;
    }
    //chưa đăng nhập -> redirect về trang signin
    this.router.navigate(['/signin']);
    return false;
  }
  
}
