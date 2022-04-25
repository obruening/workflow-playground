import { TestBed } from '@angular/core/testing';

import { TaskAssignService } from './task-assign.service';

describe('TaskAssignService', () => {
  let service: TaskAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
