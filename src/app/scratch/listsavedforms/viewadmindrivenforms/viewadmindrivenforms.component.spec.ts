import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmindrivenformsComponent } from './viewadmindrivenforms.component';

describe('ViewadmindrivenformsComponent', () => {
  let component: ViewadmindrivenformsComponent;
  let fixture: ComponentFixture<ViewadmindrivenformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewadmindrivenformsComponent]
    });
    fixture = TestBed.createComponent(ViewadmindrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
