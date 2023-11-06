import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonauthorizeduserComponent } from './nonauthorizeduser.component';

describe('NonauthorizeduserComponent', () => {
  let component: NonauthorizeduserComponent;
  let fixture: ComponentFixture<NonauthorizeduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonauthorizeduserComponent]
    });
    fixture = TestBed.createComponent(NonauthorizeduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
