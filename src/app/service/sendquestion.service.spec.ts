import { TestBed } from '@angular/core/testing';

import { SendquestionService } from './sendquestion.service';

describe('SendquestionService', () => {
  let service: SendquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
