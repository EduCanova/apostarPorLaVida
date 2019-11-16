import { TestBed } from '@angular/core/testing';

import { AyudarService } from './ayudar.service';

describe('AyudarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyudarService = TestBed.get(AyudarService);
    expect(service).toBeTruthy();
  });
});
