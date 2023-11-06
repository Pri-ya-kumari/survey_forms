import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreationComponent } from './admincreation.component';

describe('AdmincreationComponent', () => {
  let component: AdmincreationComponent;
  let fixture: ComponentFixture<AdmincreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincreationComponent]
    });
    fixture = TestBed.createComponent(AdmincreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
