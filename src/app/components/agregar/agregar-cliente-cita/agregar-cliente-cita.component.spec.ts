import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarClienteCitaComponent } from './agregar-cliente-cita.component';

describe('AgregarClienteCitaComponent', () => {
  let component: AgregarClienteCitaComponent;
  let fixture: ComponentFixture<AgregarClienteCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarClienteCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarClienteCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
