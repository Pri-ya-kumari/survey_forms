import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformdialogComponent } from './editformdialog.component';

describe('EditformdialogComponent', () => {
  let component: EditformdialogComponent;
  let fixture: ComponentFixture<EditformdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditformdialogComponent]
    });
    fixture = TestBed.createComponent(EditformdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
