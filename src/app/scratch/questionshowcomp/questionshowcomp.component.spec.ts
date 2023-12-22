import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionshowcompComponent } from './questionshowcomp.component';

describe('QuestionshowcompComponent', () => {
  let component: QuestionshowcompComponent;
  let fixture: ComponentFixture<QuestionshowcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionshowcompComponent]
    });
    fixture = TestBed.createComponent(QuestionshowcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
