import { TestBed } from '@angular/core/testing';

import { ProcessinstanceService } from './processinstance.service';

describe('ProcessinstanceService', () => {
  let service: ProcessinstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessinstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
