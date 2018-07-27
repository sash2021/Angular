import { TestBed, inject } from '@angular/core/testing';

import { CustomLocalService } from './custom-local.service';

describe('CustomLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLocalService]
    });
  });

  it('should be created', inject([CustomLocalService], (service: CustomLocalService) => {
    expect(service).toBeTruthy();
  }));
});
