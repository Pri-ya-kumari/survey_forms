import { TestBed } from '@angular/core/testing';

import { RequestuserService } from './requestuser.service';

describe('RequestuserService', () => {
  let service: RequestuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
