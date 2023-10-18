import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhomepageComponent } from './ahomepage.component';

describe('AhomepageComponent', () => {
  let component: AhomepageComponent;
  let fixture: ComponentFixture<AhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhomepageComponent]
    });
    fixture = TestBed.createComponent(AhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
