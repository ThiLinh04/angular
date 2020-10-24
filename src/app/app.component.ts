import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./core/services/authentication.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fe47-angular';


  constructor(private auth: AuthenticationService){}
  ngOnInit(): void{
    //lấy thông tin user từ local
    this.auth.initCurrentUser();
  }
}
