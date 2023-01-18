import { TestBed } from '@angular/core/testing';

import { FormAsyncValidatorsService } from './form-async-validators.service';

describe('FormAsyncValidatorsService', () => {
  let service: FormAsyncValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAsyncValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
