import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap8Component } from './baitap8.component';

describe('Baitap8Component', () => {
  let component: Baitap8Component;
  let fixture: ComponentFixture<Baitap8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
