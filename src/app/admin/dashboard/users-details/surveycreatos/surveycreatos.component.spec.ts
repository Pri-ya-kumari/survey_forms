import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveycreatosComponent } from './surveycreatos.component';

describe('SurveycreatosComponent', () => {
  let component: SurveycreatosComponent;
  let fixture: ComponentFixture<SurveycreatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveycreatosComponent]
    });
    fixture = TestBed.createComponent(SurveycreatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
