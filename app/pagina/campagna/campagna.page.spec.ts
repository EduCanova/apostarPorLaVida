import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnaPage } from './campagna.page';

describe('CampagnaPage', () => {
  let component: CampagnaPage;
  let fixture: ComponentFixture<CampagnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagnaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
