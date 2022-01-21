import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {CrearRepartidorComponent} from './crear-repartidor.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RepartidorService} from '../../shared/service/repartidor.service';
import {HttpService} from 'src/app/core/services/http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CrearRepartidorComponent', () => {
  let component: CrearRepartidorComponent;
  let fixture: ComponentFixture<CrearRepartidorComponent>;
  let repartidorService: RepartidorService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRepartidorComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [RepartidorService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRepartidorComponent);
    component = fixture.componentInstance;
    repartidorService = TestBed.inject(RepartidorService);
    spyOn(repartidorService, 'guardar').and.returnValue(
      of({valor: 1})
    );
    spyOn(repartidorService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          identificacion: '1091675',
          nombres: 'Camilo',
          apellidos: 'Arias',
          telefono: '3015467896',
        }
      ])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.repartidorForm.valid).toBeFalsy();
  });

  it('Registrando repartidor', () => {
    expect(component.repartidorForm.valid).toBeFalsy();
    component.repartidorForm.controls.referencia.setValue(1);
    component.repartidorForm.controls.nombre.setValue('Repartidor test');
    component.repartidorForm.controls.cantidad.setValue(20);
    expect(component.repartidorForm.valid).toBeTruthy();

    component.crear();

    expect(component.repartidorForm.valid).toBeTruthy();
  });
});
