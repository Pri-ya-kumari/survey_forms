import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateauthouserDetailsComponent } from './updateauthouser-details.component';

describe('UpdateauthouserDetailsComponent', () => {
  let component: UpdateauthouserDetailsComponent;
  let fixture: ComponentFixture<UpdateauthouserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateauthouserDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateauthouserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
