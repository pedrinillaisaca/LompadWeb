import { TestBed } from '@angular/core/testing';

import { ObjetoGeneralService } from './objeto-general.service';

describe('ObjetoGeneralService', () => {
  let service: ObjetoGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetoGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
