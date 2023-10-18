import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAddTestComponent } from './a-add-test.component';

describe('AAddTestComponent', () => {
  let component: AAddTestComponent;
  let fixture: ComponentFixture<AAddTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AAddTestComponent]
    });
    fixture = TestBed.createComponent(AAddTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
