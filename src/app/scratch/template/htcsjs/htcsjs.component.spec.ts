import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcsjsComponent } from './htcsjs.component';

describe('HtcsjsComponent', () => {
  let component: HtcsjsComponent;
  let fixture: ComponentFixture<HtcsjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtcsjsComponent]
    });
    fixture = TestBed.createComponent(HtcsjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
