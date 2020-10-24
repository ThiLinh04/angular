import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import {BehaviorSubject} from 'rxjs'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //currentUserSubject: cập nhật lưu trữ data
  private currentUserSubject= new BehaviorSubject(null);

  //currentUser: để component có thể subscibe được sự thay đổi
  currentUser = this.currentUserSubject.asObservable();

  constructor( private  http: HttpClient) { }

  initCurrentUser(){
    const userInfo= localStorage.getItem('userInfo');
    if(userInfo){
      this.currentUserSubject.next(JSON.parse(userInfo));
    }
  }

  dangKy(values: any){
    const url='https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post(url,{...values, maNhom:'GP01'});
  }

  dangNhap(values: any){
    const url ='https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    // pipe nhận vào các operator của rxjx
    return this.http.post(url, values).pipe(
      tap((result)=>{
        console.log(result)
        this.currentUserSubject.next(result)
      })
    );
  }
  
}
