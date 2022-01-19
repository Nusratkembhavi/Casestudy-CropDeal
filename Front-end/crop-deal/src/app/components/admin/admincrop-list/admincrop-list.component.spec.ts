import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincropListComponent } from './admincrop-list.component';

describe('AdmincropListComponent', () => {
  let component: AdmincropListComponent;
  let fixture: ComponentFixture<AdmincropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
