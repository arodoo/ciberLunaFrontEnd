import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDetalleEquipoComponent } from './agregar-detalle-equipo.component';

describe('AgregarDetalleEquipoComponent', () => {
  let component: AgregarDetalleEquipoComponent;
  let fixture: ComponentFixture<AgregarDetalleEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDetalleEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDetalleEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
