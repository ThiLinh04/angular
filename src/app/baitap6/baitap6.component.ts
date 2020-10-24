import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss'],
})
export class Baitap6Component implements OnInit {
  dssp: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  themSanPham(maSP: string, tenSP: string, giaSP: number) {
    this.dssp.push({ maSP, tenSP, giaSP });
    console.log(this.dssp)
  }
}









