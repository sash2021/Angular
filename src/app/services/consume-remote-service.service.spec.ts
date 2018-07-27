import { TestBed, inject } from '@angular/core/testing';

import { ConsumeRemoteServiceService } from './consume-remote-service.service';

describe('ConsumeRemoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumeRemoteServiceService]
    });
  });

  it('should be created', inject([ConsumeRemoteServiceService], (service: ConsumeRemoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
