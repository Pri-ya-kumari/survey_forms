import { TestBed } from '@angular/core/testing';

import { GeneralulistService } from './generalulist.service';

describe('GeneralulistService', () => {
  let service: GeneralulistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralulistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
