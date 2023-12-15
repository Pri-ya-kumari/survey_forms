import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformshomepageComponent } from './addformshomepage.component';

describe('AddformshomepageComponent', () => {
  let component: AddformshomepageComponent;
  let fixture: ComponentFixture<AddformshomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddformshomepageComponent]
    });
    fixture = TestBed.createComponent(AddformshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
