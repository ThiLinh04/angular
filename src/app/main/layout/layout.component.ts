import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "src/app/core/services/authentication.service"

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentUser: any= null;
  constructor(private auth: AuthenticationService) {
  
  }
  ngOnInit(): void {
   this.auth.currentUser.subscribe({
     next: (result: any)=>{
       this.currentUser=result;
     }
   })
  }
}
