import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministraPage } from './administra.page';

describe('AdministraPage', () => {
  let component: AdministraPage;
  let fixture: ComponentFixture<AdministraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
