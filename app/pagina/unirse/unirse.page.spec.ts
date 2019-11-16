import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirsePage } from './unirse.page';

describe('UnirsePage', () => {
  let component: UnirsePage;
  let fixture: ComponentFixture<UnirsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
