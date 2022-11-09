import { TestBed } from '@angular/core/testing';

import { IsNotLogInService } from './is-not-log-in.service';

describe('IsNotLogInService', () => {
  let service: IsNotLogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsNotLogInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
