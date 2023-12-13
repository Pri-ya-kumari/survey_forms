import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformslistComponent } from './myformslist.component';

describe('MyformslistComponent', () => {
  let component: MyformslistComponent;
  let fixture: ComponentFixture<MyformslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyformslistComponent]
    });
    fixture = TestBed.createComponent(MyformslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
