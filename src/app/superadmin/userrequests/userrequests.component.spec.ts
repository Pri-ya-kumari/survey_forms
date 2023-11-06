import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrequestsComponent } from './userrequests.component';

describe('UserrequestsComponent', () => {
  let component: UserrequestsComponent;
  let fixture: ComponentFixture<UserrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserrequestsComponent]
    });
    fixture = TestBed.createComponent(UserrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
