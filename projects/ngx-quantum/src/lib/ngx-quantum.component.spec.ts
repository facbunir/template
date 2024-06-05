import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuantumComponent } from './ngx-quantum.component';

describe('NgxQuantumComponent', () => {
  let component: NgxQuantumComponent;
  let fixture: ComponentFixture<NgxQuantumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxQuantumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxQuantumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
