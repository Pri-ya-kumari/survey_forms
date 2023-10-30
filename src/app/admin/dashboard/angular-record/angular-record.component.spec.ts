import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRecordComponent } from './angular-record.component';

describe('AngularRecordComponent', () => {
  let component: AngularRecordComponent;
  let fixture: ComponentFixture<AngularRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularRecordComponent]
    });
    fixture = TestBed.createComponent(AngularRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
