import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDataComponent } from './analysis-data.component';

describe('AnalysisDataComponent', () => {
  let component: AnalysisDataComponent;
  let fixture: ComponentFixture<AnalysisDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisDataComponent]
    });
    fixture = TestBed.createComponent(AnalysisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
