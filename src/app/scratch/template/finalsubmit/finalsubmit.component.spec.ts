import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalsubmitComponent } from './finalsubmit.component';

describe('FinalsubmitComponent', () => {
  let component: FinalsubmitComponent;
  let fixture: ComponentFixture<FinalsubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalsubmitComponent]
    });
    fixture = TestBed.createComponent(FinalsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
