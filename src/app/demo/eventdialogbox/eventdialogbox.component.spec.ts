import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdialogboxComponent } from './eventdialogbox.component';

describe('EventdialogboxComponent', () => {
  let component: EventdialogboxComponent;
  let fixture: ComponentFixture<EventdialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventdialogboxComponent]
    });
    fixture = TestBed.createComponent(EventdialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
