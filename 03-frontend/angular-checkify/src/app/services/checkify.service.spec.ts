import { TestBed } from '@angular/core/testing';

import { CheckifyService } from './checkify.service';

describe('CheckifyService', () => {
  let service: CheckifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
