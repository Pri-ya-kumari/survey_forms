import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHomeComponent } from './temp-home.component';

describe('TempHomeComponent', () => {
  let component: TempHomeComponent;
  let fixture: ComponentFixture<TempHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempHomeComponent]
    });
    fixture = TestBed.createComponent(TempHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
