import { TestBed } from '@angular/core/testing';

import { QuestoesService } from './questoes.service';

describe('QuestoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestoesService = TestBed.get(QuestoesService);
    expect(service).toBeTruthy();
  });
});
