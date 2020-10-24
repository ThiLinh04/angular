import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, ViewChild } from '@angular/core';
import {MovieItemComponent} from '../movie-item/movie-item.component'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() selectMovie = new EventEmitter()
  @ViewChildren(MovieItemComponent) movieItemComponent: QueryList<MovieItemComponent>

  movieList: any[] = [
    {tenPhim: "Avengers", gia: 90000, hinhAnh: 'assets/images/avengers.jpg'},
    {tenPhim: "Baby boss", gia: 75000, hinhAnh: 'assets/images/babyboss.jpg'},
    {tenPhim: "Onepuch man", gia: 80000, hinhAnh: 'assets/images/op.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewDetail(movie: any) {
    this.selectMovie.emit(movie);

    this.movieItemComponent.forEach((item: MovieItemComponent) => {
      console.log(item.movie)
    })
  }

}
