import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { AttributeDirectivesModule } from './attribute-directives/attribute-directives.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { InteractionModule } from './interaction/interaction.module';
import { Baitap8Module } from './baitap8/baitap8.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
// Có nhiều loại module
// Module do angular cung cấp: FormsModule, RouterModule, HttpModule
// Module do dev tự định nghĩa

import { RouterModule, Routes } from '@angular/router';
// import { Baitap1Component } from './baitap1/baitap1.component';
// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap8Component } from './baitap8/baitap8.component';

// import { MainModule } from './main/main.module';
// import { AdminModule } from './admin/admin.module';

import  {AdminGuard} from "./core/guards/admin.guard"
import {AuthenticationInterceptor} from "./core/interceptors/authentication.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const routes: Routes = [
  // {path: 'baitap1', component: Baitap1Component},
  // {path: 'baitap2', component: Baitap2Component},
  // {path: 'baitap8', component: Baitap8Component}

  // Khi dùng router load module, không cần khai báo module dưới phần imports
  { path: 'baitap1', loadChildren: () => Baitap1Module },
  { path: 'baitap2', loadChildren: () => Baitap2Module },
  { path: 'baitap8', loadChildren: () => Baitap8Module },
  // { path: '', loadChildren: () => MainModule },
  // { path: 'admin', loadChildren: () => AdminModule },
  {
    path: 'admin',
    canActivate: [AdminGuard], //array, chạy vào addGuard trước
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path:'',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),

  }
];

@NgModule({
  // Khai báo component sẽ được module quản lý
  declarations: [AppComponent, DemoComponent],
  // Khai báo các module sẽ được sử dụng
  // Ngoại trừ AppModule đã được import ở main.ts
  // Tất cả các module khác đều phải được import mới sử dụng được
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // StructuralDirectivesModule,
    // AttributeDirectivesModule,
    // Baitap6Module,
    // InteractionModule,
    // Baitap1Module,
    // Baitap2Module,
    // Baitap8Module,
  ],
  // Nơi gắn các services vào
  providers: [
    //dùng cho tất cả các service
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  // Khai báo để AppComponent là component chạy đầu tiên của module
  bootstrap: [AppComponent],
})
export class AppModule {}
