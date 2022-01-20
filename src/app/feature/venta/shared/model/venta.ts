import {Repartidor} from '../../../repartidor/shared/model/repartidor';
import {Item} from '../../../item/shared/model/item';

export class Venta {
  id: number;
  referencia: string;
  fechaEntrega: string;
  distancia: number;
  repartidor: Repartidor;
  items: Item[];

  constructor(id: number, referencia: string, fechaEntrega: string, distancia: number, repartidor: Repartidor, items: Item[]) {
    this.id = id;
    this.referencia = referencia;
    this.fechaEntrega = fechaEntrega;
    this.distancia = distancia;
    this.repartidor = repartidor;
    this.items = items;
  }
}

export interface VentaRespuesta {
  valor: number;
}
