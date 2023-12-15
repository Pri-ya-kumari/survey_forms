import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaddquestionComponent } from './createaddquestion.component';

describe('CreateaddquestionComponent', () => {
  let component: CreateaddquestionComponent;
  let fixture: ComponentFixture<CreateaddquestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateaddquestionComponent]
    });
    fixture = TestBed.createComponent(CreateaddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
