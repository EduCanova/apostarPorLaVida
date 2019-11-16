import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudarPage } from './ayudar.page';

describe('AyudarPage', () => {
  let component: AyudarPage;
  let fixture: ComponentFixture<AyudarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
