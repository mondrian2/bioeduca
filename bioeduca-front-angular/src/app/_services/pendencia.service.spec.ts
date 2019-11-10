import { TestBed } from '@angular/core/testing';

import { PendenciaService } from './pendencia.service';

describe('PendenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendenciaService = TestBed.get(PendenciaService);
    expect(service).toBeTruthy();
  });
});
