import { TestBed } from '@angular/core/testing';

import { MateriaService } from './matera-matricula.service';

describe('MateraMatriculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaService = TestBed.get(MateriaService);
    expect(service).toBeTruthy();
  });
});
