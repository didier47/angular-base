import {by, element} from 'protractor';

export class VentaPage {
  private linkCrearVenta = element(by.id('linkCrearVenta'));
  private linkListarVentas = element(by.id('linkListarVenta'));
  private botonCrearVenta = element(by.id('btnCrearVenta'));
  private referencia = element(by.id('referencia'));
  private distancia = element(by.id('distancia'));
  private fechaEntrega = element(by.id('fechaEntrega'));
  private idRepartidor = element(by.id('idRepartidor'));
  private items = element(by.id('items'));
  private listaVentas = element.all(by.css('app-root app-Venta app-listar-Venta table tbody tr'));


  async clickBotonCrearVentas() {
    await this.linkCrearVenta.click();
  }

  async clickBotonListarVentas() {
    await this.linkListarVentas.click();
  }

  async clickBotonCrearVenta() {
    await this.botonCrearVenta.click();
  }

  async ingresarReferencia(referencia) {
    await this.referencia.sendKeys(referencia);
  }

  async ingresarDistancia(distancia) {
    await this.distancia.sendKeys(distancia);
  }

  async ingresarFechaEntrega(fechaEntrega) {
    await this.fechaEntrega.sendKeys(fechaEntrega);
  }

  async ingresarIdRepartidor(idRepartidor) {
    await this.idRepartidor.sendKeys(idRepartidor);
  }

  async ingresarListaItems(items) {
    await this.items.sendKeys(items);
  }

  async contarVentas() {
    return this.listaVentas.count();
  }

  async clickBotonEliminarVenta(idVenta) {
    await element(by.id(`borrar-${idVenta}`)).click();
  }
}
