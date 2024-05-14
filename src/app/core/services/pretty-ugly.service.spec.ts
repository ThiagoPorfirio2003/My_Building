import { TestBed } from '@angular/core/testing';

import { PrettyUglyService } from './pretty-ugly.service';

describe('PrettyUglyService', () => {
  let service: PrettyUglyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrettyUglyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
