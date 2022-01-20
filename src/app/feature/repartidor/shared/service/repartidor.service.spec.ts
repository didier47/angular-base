import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from 'src/environments/environment';
import {HttpService} from '@core-service/http.service';
import {HttpResponse} from '@angular/common/http';
import {Item} from '../model/item';
import {ItemService} from './item.service';

describe('ItemService', () => {
  let httpMock: HttpTestingController;
  let service: ItemService;
  const apiEndpointItemConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointItems = `${environment.endpoint}/items`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    const productService: ItemService = TestBed.inject(ItemService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar items', () => {
    const dummyItems = [
      new Item(1, 'Item 1', 'Item', 20), new Item(2, 'Item 2', 'Item nombre 2', 20)
    ];
    service.consultar().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyItems);
    });
    const req = httpMock.expectOne(apiEndpointItemConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyItems);
  });

  it('deberia crear un item', () => {
    const dummyItem = new Item(2, 'Item 2', 'Item nombre 2', 20);
    service.guardar(dummyItem).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointItems);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un item', () => {
    const dummyItem = new Item(2, 'Item 2', 'Item nombre 2', 20);
    service.eliminar(dummyItem).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointItems}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
