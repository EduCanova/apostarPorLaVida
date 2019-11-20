import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionDetallePage } from './donacion-detalle.page';

describe('DonacionDetallePage', () => {
  let component: DonacionDetallePage;
  let fixture: ComponentFixture<DonacionDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
