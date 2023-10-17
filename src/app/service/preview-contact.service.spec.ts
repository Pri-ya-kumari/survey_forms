import { TestBed } from '@angular/core/testing';

import { PreviewContactService } from './preview-contact.service';

describe('PreviewContactService', () => {
  let service: PreviewContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
