import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminprofileComponent } from './superadminprofile.component';

describe('SuperadminprofileComponent', () => {
  let component: SuperadminprofileComponent;
  let fixture: ComponentFixture<SuperadminprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperadminprofileComponent]
    });
    fixture = TestBed.createComponent(SuperadminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
