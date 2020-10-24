import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatInputModule,MatPaginatorModule
  ],
  exports:[MatButtonModule,MatInputModule,MatPaginatorModule],
})
export class MaterialModule { }
