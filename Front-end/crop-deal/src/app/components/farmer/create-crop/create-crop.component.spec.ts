import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCropComponent } from './create-crop.component';

describe('CreateCropComponent', () => {
  let component: CreateCropComponent;
  let fixture: ComponentFixture<CreateCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
