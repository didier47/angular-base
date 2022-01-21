import {Repartidor} from '../../../repartidor/shared/model/repartidor';
import {Item} from '../../../item/shared/model/item';

export class Venta {
  id: number;
  referencia: string;
  fechaEntrega: string;
  distancia: number;
  repartidor: Repartidor;
  items: Item[];
  valorEnvio: number;

  constructor(
    id: number,
    referencia: string,
    fechaEntrega: string,
    distancia: number,
    repartidor: Repartidor,
    items: Item[],
    valorEnvio: number) {
    this.id = id;
    this.referencia = referencia;
    this.fechaEntrega = fechaEntrega;
    this.distancia = distancia;
    this.repartidor = repartidor;
    this.items = items;
    this.valorEnvio = valorEnvio;
  }
}

export interface VentaRespuesta {
  valor: number;
}
