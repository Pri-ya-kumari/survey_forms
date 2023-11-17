import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesuperadminComponent } from './updatesuperadmin.component';

describe('UpdatesuperadminComponent', () => {
  let component: UpdatesuperadminComponent;
  let fixture: ComponentFixture<UpdatesuperadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesuperadminComponent]
    });
    fixture = TestBed.createComponent(UpdatesuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
