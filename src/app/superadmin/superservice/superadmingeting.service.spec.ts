import { TestBed } from '@angular/core/testing';

import { SuperadmingetingService } from './superadmingeting.service';

describe('SuperadmingetingService', () => {
  let service: SuperadmingetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperadmingetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
