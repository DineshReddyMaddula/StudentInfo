import { TestBed, inject } from '@angular/core/testing';

import { StudentResultService } from './student-result.service';

describe('StudentResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentResultService]
    });
  });

  it('should be created', inject([StudentResultService], (service: StudentResultService) => {
    expect(service).toBeTruthy();
  }));
});
