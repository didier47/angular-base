import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from 'src/environments/environment';
import {HttpService} from '@core-service/http.service';
import {HttpResponse} from '@angular/common/http';
import {Venta} from '../model/venta';
import {VentaService} from './venta.service';

describe('VentaService', () => {
  let httpMock: HttpTestingController;
  let service: VentaService;
  const apiEndpointVentaConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointVentas = `${environment.endpoint}/items`;

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

  it('deberia listar items', () => {
    const dummyVentas = [
      new Venta(1, 'Venta 1', 'Venta', 20), new Venta(2, 'Venta 2', 'Venta nombre 2', 20)
    ];
    service.consultar().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyVentas);
    });
    const req = httpMock.expectOne(apiEndpointVentaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVentas);
  });

  it('deberia crear un item', () => {
    const dummyVenta = new Venta(2, 'Venta 2', 'Venta nombre 2', 20);
    service.guardar(dummyVenta).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointVentas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un item', () => {
    const dummyVenta = new Venta(2, 'Venta 2', 'Venta nombre 2', 20);
    service.eliminar(dummyVenta).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointVentas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
