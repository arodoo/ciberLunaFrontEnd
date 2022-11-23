import { TestBed } from '@angular/core/testing';

import { DetalleEquipoService } from './detalle-equipo.service';

describe('DetalleEquipoService', () => {
  let service: DetalleEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
