import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {ListarVentaComponent} from './listar-venta.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {VentaService} from '../../shared/service/venta.service';
import {Venta} from '../../shared/model/venta';
import {HttpService} from 'src/app/core/services/http.service';
import {Repartidor} from '@repartidor/shared/model/repartidor';
import {Item} from '@item/shared/model/item';

describe('ListarVentaComponent', () => {
  let component: ListarVentaComponent;
  let fixture: ComponentFixture<ListarVentaComponent>;
  let ventaService: VentaService;
  const listaRepartidores: Repartidor[] = [
    new Repartidor(1,
      '12345',
      'Nombres',
      'Apellidos',
      '12341231')
  ];
  const listaItems: Item[] = [
    new Item(1, 'martillo-123', 'Martillo', 20),
    new Item(2, 'martillo-1232', 'Martillo', 20)
  ];
  const listaVentas: Venta[] = [
    new Venta(1, 'referencia', '2022-01-25', 20, listaRepartidores[0], listaItems,
      20000),
    new Venta(2, 'referenciados', '2022-01-25', 10, listaRepartidores[0], listaItems,
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
      providers: [VentaService, HttpService]
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
