import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasPorAgregarComponent } from './citas-por-agregar.component';

describe('CitasPorAgregarComponent', () => {
  let component: CitasPorAgregarComponent;
  let fixture: ComponentFixture<CitasPorAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasPorAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasPorAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
