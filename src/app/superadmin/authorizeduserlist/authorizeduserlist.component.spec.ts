import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeduserlistComponent } from './authorizeduserlist.component';

describe('AuthorizeduserlistComponent', () => {
  let component: AuthorizeduserlistComponent;
  let fixture: ComponentFixture<AuthorizeduserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizeduserlistComponent]
    });
    fixture = TestBed.createComponent(AuthorizeduserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
