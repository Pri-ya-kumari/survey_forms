import { ComponentFixture, TestBed } from '@angular/core/testing';

import { previewfileComponent } from './previewfile.component';

describe('ResponsesComponent', () => {
  let component: previewfileComponent;
  let fixture: ComponentFixture<previewfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [previewfileComponent]
    });
    fixture = TestBed.createComponent(previewfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
