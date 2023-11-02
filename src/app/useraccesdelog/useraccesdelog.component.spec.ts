import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccesdelogComponent } from './useraccesdelog.component';

describe('UseraccesdelogComponent', () => {
  let component: UseraccesdelogComponent;
  let fixture: ComponentFixture<UseraccesdelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseraccesdelogComponent]
    });
    fixture = TestBed.createComponent(UseraccesdelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
