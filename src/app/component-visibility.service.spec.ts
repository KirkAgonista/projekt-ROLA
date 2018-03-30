import { TestBed, inject } from '@angular/core/testing';

import { ComponentVisibilityService } from './component-visibility.service';

describe('ComponentVisibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentVisibilityService]
    });
  });

  it('should be created', inject([ComponentVisibilityService], (service: ComponentVisibilityService) => {
    expect(service).toBeTruthy();
  }));
});
