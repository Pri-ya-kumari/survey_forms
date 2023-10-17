import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewContactComponent } from './preview-contact.component';

describe('PreviewContactComponent', () => {
  let component: PreviewContactComponent;
  let fixture: ComponentFixture<PreviewContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewContactComponent]
    });
    fixture = TestBed.createComponent(PreviewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
