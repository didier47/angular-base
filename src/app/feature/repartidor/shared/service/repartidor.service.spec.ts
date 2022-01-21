import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from 'src/environments/environment';
import {HttpService} from '@core-service/http.service';
import {HttpResponse} from '@angular/common/http';
import {Repartidor, RepartidorRespuesta} from '../model/repartidor';
import {RepartidorService} from './repartidor.service';

describe('RepartidorService', () => {
  let httpMock: HttpTestingController;
  let service: RepartidorService;
  const apiEndpointRepartidorConsulta = `${environment.endpoint}/repartidores`;
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
    const repartidores = [
      new Repartidor(1, '102331652', 'nombresuno', 'apellidosuno', '1235646'),
      new Repartidor(2, '10233165', 'nombresdos', 'apellidosdos', '1235646123')
    ];
    service.consultar().subscribe(repartidor => {
      expect(repartidor.length).toBe(2);
      expect(repartidor).toEqual(repartidores);
    });
    const req = httpMock.expectOne(apiEndpointRepartidorConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(repartidores);
  });

  it('deberia crear un repartidor', () => {
    const dummyRepartidor = new Repartidor(2, '10233165', 'nombresuno', 'apellidosuno', '1235646');
    service.guardar(dummyRepartidor).subscribe((respuesta) => {
      expect(respuesta).toEqual({valor: 1});
    });
    const req = httpMock.expectOne(apiEndpointRepartidores);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<RepartidorRespuesta>({body: {valor: 1}}));
  });

  it('deberia eliminar un repartidor', () => {
    const dummyRepartidor = new Repartidor(2, '10233165', 'nombresuno', 'apellidosuno', '1235646');
    service.eliminar(dummyRepartidor).subscribe((respuesta) => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpointRepartidores}/2`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<true>());
  });
});
