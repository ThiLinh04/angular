import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachDatComponent } from './danh-sach-dat/danh-sach-dat.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss'],
})
export class Baitap8Component implements OnInit {
  @ViewChild(DanhSachDatComponent)
    danhSachDatComponent: DanhSachDatComponent;

  @ViewChild(DanhSachGheComponent)
    danhSachGheComponent: DanhSachGheComponent;
  constructor() {}

  ngOnInit(): void {}

  xuLyDatGhe(ghe: any) {
    this.danhSachDatComponent.xuLyDatGhe(ghe);
  }

  xuLyHuyGhe(soGhe: number) {
    this.danhSachGheComponent.xuLyHuyGhe(soGhe)
  }
}
