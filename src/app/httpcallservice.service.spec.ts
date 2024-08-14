import { TestBed } from '@angular/core/testing';

import { HttpcallserviceService } from './httpcallservice.service';

describe('HttpcallserviceService', () => {
  let service: HttpcallserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcallserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
