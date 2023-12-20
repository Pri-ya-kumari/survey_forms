import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionformnowComponent } from './addquestionformnow.component';

describe('AddquestionformnowComponent', () => {
  let component: AddquestionformnowComponent;
  let fixture: ComponentFixture<AddquestionformnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddquestionformnowComponent]
    });
    fixture = TestBed.createComponent(AddquestionformnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
