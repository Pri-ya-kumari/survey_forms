import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsavedformsComponent } from './viewsavedforms.component';

describe('ViewsavedformsComponent', () => {
  let component: ViewsavedformsComponent;
  let fixture: ComponentFixture<ViewsavedformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsavedformsComponent]
    });
    fixture = TestBed.createComponent(ViewsavedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
