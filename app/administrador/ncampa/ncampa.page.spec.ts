import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcampaPage } from './ncampa.page';

describe('NcampaPage', () => {
  let component: NcampaPage;
  let fixture: ComponentFixture<NcampaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcampaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcampaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
