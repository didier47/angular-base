export class Item {
  id: number;
  referencia: string;
  nombre: string;
  cantidad: number;

  constructor(id: number, referencia: string, nombre: string, cantidad: number) {
    this.id = id;
    this.referencia = referencia;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

export interface ItemRespuesta {
  valor: number;
}

export interface IdCantidadItem {
  id: number;
  referencia: string;
  nombre: string;
  cantidad: number;
}
