import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dat',
  templateUrl: './danh-sach-dat.component.html',
  styleUrls: ['./danh-sach-dat.component.scss'],
})
export class DanhSachDatComponent implements OnInit {
  @Output() onRemove = new EventEmitter()
  mangGheDaDat: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  xuLyDatGhe(ghe: any) {
    if (ghe.dangDat) {
      this.mangGheDaDat.push(ghe);
    } else {
      const index = this.mangGheDaDat.findIndex(
        (item) => item.soGhe === ghe.soGhe
      );

      if(index !== -1) {
        this.mangGheDaDat.splice(index, 1);
      }
    }
  }

  xuLyHuyGhe(soGhe: number) {
    // B1: Xử lý xoá ghế ra khỏi mang ghế đã đặt
    this.mangGheDaDat = this.mangGheDaDat.filter(
      item => item.soGhe !== soGhe
    )
    // B2: output số ghế ra thằng cha
    this.onRemove.emit(soGhe)
  }
}
