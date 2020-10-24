import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDatComponent } from './danh-sach-dat.component';

describe('DanhSachDatComponent', () => {
  let component: DanhSachDatComponent;
  let fixture: ComponentFixture<DanhSachDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
