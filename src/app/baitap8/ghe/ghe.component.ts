import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe: any
  @Output() onSelect = new EventEmitter()

  dangDat: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  datGhe() {
    this.dangDat = !this.dangDat

    this.onSelect.emit({...this.ghe, dangDat: this.dangDat})
  }

}
