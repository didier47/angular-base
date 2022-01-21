import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {CrearVentaComponent} from './crear-venta.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {VentaService} from '../../shared/service/venta.service';
import {HttpService} from 'src/app/core/services/http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RepartidorService} from '../../../repartidor/shared/service/repartidor.service';
import {ItemService} from '../../../item/shared/service/item.service';

describe('CrearVentaComponent', () => {
  let component: CrearVentaComponent;
  let fixture: ComponentFixture<CrearVentaComponent>;
  let ventaService: VentaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVentaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [VentaService, RepartidorService, ItemService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVentaComponent);
    component = fixture.componentInstance;
    ventaService = TestBed.inject(VentaService);
    spyOn(ventaService, 'guardar').and.returnValue(
      of({valor: 1})
    );
    spyOn(ventaService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          referencia: 'martillo-123',
          fechaEntrega: '2022-02-13',
          distancia: 20,
          repartidor: {
            id: 1,
            identificacion: '12345',
            nombres: 'Nombres',
            apellidos: 'Apellidos',
            telefono: '12341231'
          },
          items: [
            {id: 1, referencia: 'martillo-123', nombre: 'Martillo', cantidad: 20},
            {id: 2, referencia: 'martillo-1233', nombre: 'Martillo 2', cantidad: 10}
          ],
          valorEnvio: 20000
        }
      ])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.ventaForm.valid).toBeFalsy();
  });

  it('Registrando venta', () => {
    expect(component.ventaForm.valid).toBeFalsy();
    component.ventaForm.controls.referencia.setValue('referencia');
    component.ventaForm.controls.fechaEntrega.setValue('2022-01-25');
    component.ventaForm.controls.distancia.setValue(20);
    component.ventaForm.controls.idRepartidor.setValue(1);
    component.ventaForm.controls.items.setValue([
      {id: 1, referencia: 'martillo-123', nombre: 'Martillo', cantidad: 20},
      {id: 2, referencia: 'martillo-1233', nombre: 'Martillo 2', cantidad: 10}
    ]);
    expect(component.ventaForm.valid).toBeTruthy();

    component.crear();

    expect(component.ventaForm.valid).toBeTruthy();
  });
});
