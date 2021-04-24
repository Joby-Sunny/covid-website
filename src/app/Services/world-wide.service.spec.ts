import { TestBed } from '@angular/core/testing';

import { WorldWideService } from './world-wide.service';

describe('WorldWideService', () => {
  let service: WorldWideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldWideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
