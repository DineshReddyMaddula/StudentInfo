import { TestBed, inject } from '@angular/core/testing';

import { StudentResultResolverService } from './student-result.resolver.service';

describe('StudenResult.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentResultResolverService]
    });
  });

  it('should be created', inject([StudentResultResolverService], (service: StudentResultResolverService) => {
    expect(service).toBeTruthy();
  }));
});
