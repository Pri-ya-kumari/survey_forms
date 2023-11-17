import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadminDetailsComponent } from './updateadmin-details.component';

describe('UpdateadminDetailsComponent', () => {
  let component: UpdateadminDetailsComponent;
  let fixture: ComponentFixture<UpdateadminDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateadminDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateadminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
