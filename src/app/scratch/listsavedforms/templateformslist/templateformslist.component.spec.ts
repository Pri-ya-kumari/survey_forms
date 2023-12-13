import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformslistComponent } from './templateformslist.component';

describe('TemplateformslistComponent', () => {
  let component: TemplateformslistComponent;
  let fixture: ComponentFixture<TemplateformslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateformslistComponent]
    });
    fixture = TestBed.createComponent(TemplateformslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
