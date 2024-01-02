import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionviewbuildComponent } from './questionviewbuild.component';

describe('QuestionviewbuildComponent', () => {
  let component: QuestionviewbuildComponent;
  let fixture: ComponentFixture<QuestionviewbuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionviewbuildComponent]
    });
    fixture = TestBed.createComponent(QuestionviewbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
