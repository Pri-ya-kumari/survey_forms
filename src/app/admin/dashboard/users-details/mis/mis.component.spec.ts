import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisComponent } from './mis.component';

describe('MisComponent', () => {
  let component: MisComponent;
  let fixture: ComponentFixture<MisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisComponent]
    });
    fixture = TestBed.createComponent(MisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
