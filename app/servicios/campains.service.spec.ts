import { TestBed } from '@angular/core/testing';

import { CampainsService } from './campains.service';

describe('CampainsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampainsService = TestBed.get(CampainsService);
    expect(service).toBeTruthy();
  });
});
