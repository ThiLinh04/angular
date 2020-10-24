import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NewsComponent } from './news/news.component';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from "../shared/material/material.module"
import {PipeModule} from "../shared/pipe/pipe.module"
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // Khi xài children, thì file html phải có router-outlet
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'news', component: NewsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    NewsComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),MaterialModule,PipeModule],
})
export class MainModule {}
