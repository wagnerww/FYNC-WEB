import { TestBed, inject } from '@angular/core/testing';

import { EsportesService } from './esportes.service';

describe('EsportesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsportesService]
    });
  });

  it('should be created', inject([EsportesService], (service: EsportesService) => {
    expect(service).toBeTruthy();
  }));
});
