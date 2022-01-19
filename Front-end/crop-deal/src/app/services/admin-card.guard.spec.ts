import { TestBed } from '@angular/core/testing';

import { AdminCardGuard } from './admin-card.guard';

describe('AdminCardGuard', () => {
  let guard: AdminCardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminCardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
