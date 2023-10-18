import { TestBed } from '@angular/core/testing';

import { PrevieweventService } from './previewevent.service';

describe('PrevieweventService', () => {
  let service: PrevieweventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevieweventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
