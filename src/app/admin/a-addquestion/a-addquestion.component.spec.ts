import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAddquestionComponent } from './a-addquestion.component';

describe('AAddquestionComponent', () => {
  let component: AAddquestionComponent;
  let fixture: ComponentFixture<AAddquestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AAddquestionComponent]
    });
    fixture = TestBed.createComponent(AAddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
