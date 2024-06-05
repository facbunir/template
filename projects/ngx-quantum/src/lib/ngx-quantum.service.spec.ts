import { TestBed } from '@angular/core/testing';

import { NgxQuantumService } from './ngx-quantum.service';

describe('NgxQuantumService', () => {
  let service: NgxQuantumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxQuantumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
