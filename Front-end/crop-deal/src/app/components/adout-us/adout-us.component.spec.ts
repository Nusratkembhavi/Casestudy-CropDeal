import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoutUsComponent } from './adout-us.component';

describe('AdoutUsComponent', () => {
  let component: AdoutUsComponent;
  let fixture: ComponentFixture<AdoutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
