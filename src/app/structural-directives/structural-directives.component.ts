import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isShowing: boolean = true;

  isLoggedIn: boolean = false;

  color: string = ""

  dssv: any = [
    {hoTen: "Tuấn", lop: 'FE47'},
    {hoTen: "Khải", lop: 'FE48'},
    {hoTen: "Dân", lop: 'FE49'}
  ];

  constructor() {}

  ngOnInit(): void {}
}
