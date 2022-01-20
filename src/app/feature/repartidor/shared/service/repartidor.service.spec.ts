import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from 'src/environments/environment';
import {HttpService} from '@core-service/http.service';
import {HttpResponse} from '@angular/common/http';
import {Repartidor} from '../model/repartidor';
import {RepartidorService} from './repartidor.service';

describe('RepartidorService', () => {
  let httpMock: HttpTestingController;
  let service: RepartidorService;
  const apiEndpointRepartidorConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointRepartidores = `${environment.endpoint}/repartidores`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepartidorService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RepartidorService);
  });

  it('should be created', () => {
    const productService: RepartidorService = TestBed.inject(RepartidorService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar repartidores', () => {
    const dummyRepartidores = [
      new Repartidor(1, 'Repartidor 1', 'Repartidor', 20), new Repartidor(2, 'Repartidor 2', 'Repartidor nombre 2', 20)
    ];
    service.consultar().subscribe(repartidores => {
      expect(repartidores.length).toBe(2);
      expect(repartidores).toEqual(dummyRepartidores);
    });
    const req = httpMock.expectOne(apiEndpointRepartidorConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepartidores);
  });

  it('deberia crear un repartidor', () => {
    const dummyRepartidor = new Repartidor(2, 'Repartidor 2', 'Repartidor nombre 2', 20);
    service.guardar(dummyRepartidor).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointRepartidores);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un repartidor', () => {
    const dummyRepartidor = new Repartidor(2, 'Repartidor 2', 'Repartidor nombre 2', 20);
    service.eliminar(dummyRepartidor).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointRepartidores}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
