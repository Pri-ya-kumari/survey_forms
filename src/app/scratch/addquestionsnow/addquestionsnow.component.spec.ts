import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionsnowComponent } from './addquestionsnow.component';

describe('AddquestionsnowComponent', () => {
  let component: AddquestionsnowComponent;
  let fixture: ComponentFixture<AddquestionsnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddquestionsnowComponent]
    });
    fixture = TestBed.createComponent(AddquestionsnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
