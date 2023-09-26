import { TestBed } from '@angular/core/testing';

import { Googlesheetf2Service } from './googlesheetf2.service';

describe('Googlesheetf2Service', () => {
  let service: Googlesheetf2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Googlesheetf2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
