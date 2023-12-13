import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsavedhomepageComponent } from './listsavedhomepage.component';

describe('ListsavedhomepageComponent', () => {
  let component: ListsavedhomepageComponent;
  let fixture: ComponentFixture<ListsavedhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsavedhomepageComponent]
    });
    fixture = TestBed.createComponent(ListsavedhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
