import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {ListarVentaComponent} from './listar-venta.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {VentaService} from '../../shared/service/venta.service';
import {Venta} from '../../shared/model/venta';
import {HttpService} from 'src/app/core/services/http.service';
import {RepartidorService} from '../../../repartidor/shared/service/repartidor.service';
import {ItemService} from '../../../item/shared/service/item.service';

describe('ListarVentaComponent', () => {
  let component: ListarVentaComponent;
  let fixture: ComponentFixture<ListarVentaComponent>;
  let ventaService: VentaService;
  const listaVentas: Venta[] = [
    new Venta(1, 'referencia', '2022-01-25', 20, {
        id: 1,
        identificacion: '12345',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        telefono: '12341231'
      }, [
        {id: 1, referencia: 'martillo-123', nombre: 'Martillo', cantidad: 20},
        {id: 2, referencia: 'martillo-1233', nombre: 'Martillo 2', cantidad: 10}
      ],
      20000),
    new Venta(2, 'referenciados', '2022-01-25', 10, {
        id: 1,
        identificacion: '12345',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        telefono: '12341231'
      }, [
        {id: 1, referencia: 'martillo-123', nombre: 'Martillo', cantidad: 20},
        {id: 2, referencia: 'martillo-1233', nombre: 'Martillo 2', cantidad: 10}
      ],
      20000)
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVentaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [VentaService, RepartidorService, ItemService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentaComponent);
    component = fixture.componentInstance;
    ventaService = TestBed.inject(VentaService);
    spyOn(ventaService, 'consultar').and.returnValue(
      of(listaVentas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.listaVentas.length).toBe(2);
  });

  it('should list ventas', () => {
    expect(component.listaVentas.length).toBe(2);
  });

  it('should delete venta', () => {
    component.removerVentaDeLista(listaVentas, listaVentas[0]);
    expect(component.listaVentas.length).toBe(1);
  });

});
