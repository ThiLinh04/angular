import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() addMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  themPhim(tenPhim: string, gia: number, hinhAnh: string) {
    this.addMovie.emit({ tenPhim, gia, hinhAnh });
  }
}
