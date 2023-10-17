import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRegisterComponent } from './demo-register.component';

describe('DemoRegisterComponent', () => {
  let component: DemoRegisterComponent;
  let fixture: ComponentFixture<DemoRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoRegisterComponent]
    });
    fixture = TestBed.createComponent(DemoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
