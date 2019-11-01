import { TestBed } from '@angular/core/testing';

import { SugestaoService } from './sugestao.service';

describe('SugestaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SugestaoService = TestBed.get(SugestaoService);
    expect(service).toBeTruthy();
  });
});
