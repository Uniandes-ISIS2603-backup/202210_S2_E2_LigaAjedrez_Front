/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AperturaService } from './apertura.service';

describe('Service: Apertura', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AperturaService]
    });
  });

  it('should ...', inject([AperturaService], (service: AperturaService) => {
    expect(service).toBeTruthy();
  }));
});
