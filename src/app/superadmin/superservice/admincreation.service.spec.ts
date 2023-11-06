import { TestBed } from '@angular/core/testing';

import { AdmincreationService } from './admincreation.service';

describe('AdmincreationService', () => {
  let service: AdmincreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
