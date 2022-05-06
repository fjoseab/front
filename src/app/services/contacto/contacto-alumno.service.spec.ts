import { TestBed } from '@angular/core/testing';

import { ContactoAlumnoService } from './contacto-alumno.service';

describe('ContactoAlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactoAlumnoService = TestBed.get(ContactoAlumnoService);
    expect(service).toBeTruthy();
  });
});
