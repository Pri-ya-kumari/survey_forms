import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedformsComponent } from './savedforms.component';

describe('SavedformsComponent', () => {
  let component: SavedformsComponent;
  let fixture: ComponentFixture<SavedformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedformsComponent]
    });
    fixture = TestBed.createComponent(SavedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
