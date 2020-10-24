import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any
  @Output() selectMovie = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  viewDetail() {
    // Kích hoạt và đẩy sự kiện selectMovie lên component cha
    this.selectMovie.emit(this.movie)
  }

}
