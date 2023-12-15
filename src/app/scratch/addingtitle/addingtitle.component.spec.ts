import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingtitleComponent } from './addingtitle.component';

describe('AddingtitleComponent', () => {
  let component: AddingtitleComponent;
  let fixture: ComponentFixture<AddingtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingtitleComponent]
    });
    fixture = TestBed.createComponent(AddingtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
