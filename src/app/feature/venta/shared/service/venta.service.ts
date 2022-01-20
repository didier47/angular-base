import {Injectable} from '@angular/core';
import {HttpService} from '@core-service/http.service';
import {environment} from 'src/environments/environment';
import {Item} from '../model/item';


@Injectable()
export class ItemService {

  constructor(protected http: HttpService) {
  }

  public consultar() {
    return this.http.doGet<Item[]>(`${environment.endpoint}/items`, this.http.optsName('consultar items'));
  }

  public guardar(item: Item) {
    return this.http.doPost<Item, boolean>(`${environment.endpoint}/items`, item,
      this.http.optsName('crear/actualizar items'));
  }

  public eliminar(item: Item) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/items/${item.id}`,
      this.http.optsName('eliminar items'));
  }
}
