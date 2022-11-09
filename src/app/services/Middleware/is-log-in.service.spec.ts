import { TestBed } from '@angular/core/testing';

import { IsLogInService } from './is-log-in.service';

describe('IsLogInService', () => {
  let service: IsLogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLogInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
