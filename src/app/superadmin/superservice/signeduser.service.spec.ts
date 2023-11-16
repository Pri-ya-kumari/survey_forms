import { TestBed } from '@angular/core/testing';

import { SigneduserService } from './signeduser.service';

describe('SigneduserService', () => {
  let service: SigneduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigneduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
