import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularsFormComponent } from './angulars-form.component';

describe('AngularsFormComponent', () => {
  let component: AngularsFormComponent;
  let fixture: ComponentFixture<AngularsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularsFormComponent]
    });
    fixture = TestBed.createComponent(AngularsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
