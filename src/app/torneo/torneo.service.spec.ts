/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TorneoService } from './torneo.service';

describe('Service: Torneo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorneoService]
    });
  });

  it('should ...', inject([TorneoService], (service: TorneoService) => {
    expect(service).toBeTruthy();
  }));
});
