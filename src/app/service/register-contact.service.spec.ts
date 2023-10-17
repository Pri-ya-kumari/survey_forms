import { TestBed } from '@angular/core/testing';

import { RegisterContactService } from './register-contact.service';

describe('RegisterContactService', () => {
  let service: RegisterContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
