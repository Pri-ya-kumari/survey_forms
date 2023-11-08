import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardshowComponent } from './wildcardshow.component';

describe('WildcardshowComponent', () => {
  let component: WildcardshowComponent;
  let fixture: ComponentFixture<WildcardshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WildcardshowComponent]
    });
    fixture = TestBed.createComponent(WildcardshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
