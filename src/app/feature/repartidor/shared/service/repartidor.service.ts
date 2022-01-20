import {Injectable} from '@angular/core';
import {HttpService} from '@core-service/http.service';
import {environment} from 'src/environments/environment';
import {Repartidor, RepartidorRespuesta} from '../model/repartidor';


@Injectable()
export class RepartidorService {

  constructor(protected http: HttpService) {
  }

  public consultar() {
    return this.http.doGet<Repartidor[]>(`${environment.endpoint}/repartidores`, this.http.optsName('consultar repartidores'));
  }

  public guardar(repartidor: Repartidor) {
    return this.http.doPost<Repartidor, RepartidorRespuesta>(`${environment.endpoint}/repartidores`, repartidor,
      this.http.optsName('crear/actualizar repartidores'));
  }

  public eliminar(repartidor: Repartidor) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/repartidores/${repartidor.id}`,
      this.http.optsName('eliminar repartidores'));
  }
}
