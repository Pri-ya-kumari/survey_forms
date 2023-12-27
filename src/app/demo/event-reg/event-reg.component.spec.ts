import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegComponent } from './event-reg.component';

describe('EventRegComponent', () => {
  let component: EventRegComponent;
  let fixture: ComponentFixture<EventRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventRegComponent]
    });
    fixture = TestBed.createComponent(EventRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
