import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyusersComponent } from './surveyusers.component';

describe('SurveyusersComponent', () => {
  let component: SurveyusersComponent;
  let fixture: ComponentFixture<SurveyusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyusersComponent]
    });
    fixture = TestBed.createComponent(SurveyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
