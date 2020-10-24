import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';

import { GheService } from 'src/app/core/services/ghe.service';
import { Ghe } from 'src/app/core/models/ghe';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss'],
})
export class DanhSachGheComponent implements OnInit {
  @ViewChildren(GheComponent) gheComponents: QueryList<GheComponent>;
  @Output() onSelect = new EventEmitter();
  mangGhe: Ghe[]
  // Để sử dụng được service phải khai báo trong constructor
  constructor(private gheService: GheService) {}
  // Tương đương với componentDidMount bên react
  ngOnInit(): void {
    this.mangGhe = this.gheService.layDanhSachGhe()
  }

  xuLyDatGhe(ghe: any) {
    this.onSelect.emit(ghe);
  }

  xuLyHuyGhe(soGhe: number) {
    this.gheComponents.forEach((item: GheComponent) => {
      if (item.ghe.soGhe === soGhe) {
        item.dangDat = false;
      }
    });
  }
}
