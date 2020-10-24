import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from "src/app/core/services/authentication.service" 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  //view tới thẻ trong html dùng tham chiếu
  @ViewChild('signupForm') signupForm: NgForm;

  constructor( private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkDirtyForm(){
    //kiểm tra form thay đổi
    return this.signupForm.dirty;
  }

  xuLyDangKy(signupForm:NgForm){
    //Kiểm tra form có hợp lệ không
    if(signupForm.invalid) return;
    //call API
    console.log(signupForm.value)
    this.auth.dangKy(signupForm.value).subscribe({
      next: (result)=>{
        console.log(result);
      },
      error: (err)=>{
        console.log(err.error);
      },
      complete: ()=> console.log('Đăng ký thành công')
    })
  }
}
