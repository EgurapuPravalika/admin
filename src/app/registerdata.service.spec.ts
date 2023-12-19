import { TestBed } from '@angular/core/testing';

import { RegisterdataService } from './registerdata.service';

describe('RegisterdataService', () => {
  let service: RegisterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
