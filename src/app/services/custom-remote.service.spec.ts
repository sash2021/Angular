import { TestBed, inject } from '@angular/core/testing';

import { CustomRemoteService } from './custom-remote.service';

describe('CustomRemoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomRemoteService]
    });
  });

  it('should be created', inject([CustomRemoteService], (service: CustomRemoteService) => {
    expect(service).toBeTruthy();
  }));
});
