import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsavedformsComponent } from './listsavedforms.component';

describe('ListsavedformsComponent', () => {
  let component: ListsavedformsComponent;
  let fixture: ComponentFixture<ListsavedformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsavedformsComponent]
    });
    fixture = TestBed.createComponent(ListsavedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
