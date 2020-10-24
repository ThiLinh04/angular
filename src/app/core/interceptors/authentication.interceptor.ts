import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const userInfo= localStorage.getItem('userInfo');
    if(userInfo){
      const {accessToken}= JSON.parse(userInfo);

      //trả về request mới-> gán
     request = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
      })
    }
    return next.handle(request);
  }
}
