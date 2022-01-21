import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from 'src/environments/environment';
import {HttpService} from '@core-service/http.service';
import {HttpResponse} from '@angular/common/http';
import {Venta, VentaRespuesta} from '../model/venta';
import {VentaService} from './venta.service';

describe('VentaService', () => {
  let httpMock: HttpTestingController;
  let service: VentaService;
  const apiEndpointVentaConsulta = `${environment.endpoint}/ventas`;
  const apiEndpointVentas = `${environment.endpoint}/ventas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VentaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(VentaService);
  });

  it('should be created', () => {
    const productService: VentaService = TestBed.inject(VentaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar ventas', () => {
    const ventas = [
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
      new Venta(2, 'referenciados', '2022-01-25', 20, {
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
    service.consultar().subscribe(venta => {
      expect(venta.length).toBe(2);
      expect(venta).toEqual(ventas);
    });
    const req = httpMock.expectOne(apiEndpointVentaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(ventas);
  });

  it('deberia crear un venta', () => {
    const dummyVenta = new Venta(1, 'referencia', '2022-01-25', 20, {
        id: 1,
        identificacion: '12345',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        telefono: '12341231'
      }, [
        {id: 1, referencia: 'martillo-123', nombre: 'Martillo', cantidad: 20},
        {id: 2, referencia: 'martillo-1233', nombre: 'Martillo 2', cantidad: 10}
      ],
      20000);
    service.guardar(dummyVenta).subscribe((respuesta) => {
      expect(respuesta).toEqual({valor: 1});
    });
    const req = httpMock.expectOne(apiEndpointVentas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<VentaRespuesta>({body: {valor: 1}}));
  });

  it('deberia eliminar un venta', () => {
    const dummyVenta = new Venta(1, 'referencia', '2022-01-25', 20, {
        id: 1,
        identificacion: '12345',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        telefono: '12341231'
      }, [
        {id: 1, referencia: 'martillo-123', nombre: 'Martillo', cantidad: 20},
        {id: 2, referencia: 'martillo-1233', nombre: 'Martillo 2', cantidad: 10}
      ],
      20000);
    service.eliminar(dummyVenta).subscribe((respuesta) => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpointVentas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<true>());
  });
});
