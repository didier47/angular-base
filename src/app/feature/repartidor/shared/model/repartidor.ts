export class Repartidor {
  id: number;
  identificacion: string;
  nombres: string;
  apellidos: string;
  telefono: string;

  constructor(id: number, identificacion: string, nombres: string, apellidos: string, telefono: string) {
    this.id = id;
    this.identificacion = identificacion;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
  }
}

export interface RepartidorRespuesta {
  valor: number;
}
