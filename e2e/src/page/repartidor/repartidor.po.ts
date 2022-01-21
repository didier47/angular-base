import {by, element} from 'protractor';

export class RepartidorPage {
  private linkCrearRepartidor = element(by.id('linkCrearRepartidor'));
  private linkListarRepartidores = element(by.id('linkListarRepartidor'));
  private botonCrearRepartidor = element(by.id('btnCrearRepartidor'));
  private identificacion = element(by.id('identificacion'));
  private nombres = element(by.id('nombres'));
  private apellidos = element(by.id('apellidos'));
  private telefono = element(by.id('telefono'));
  private listaRepartidores = element.all(by.css('app-root app-repartidor app-listar-repartidor table tbody tr'));


  async clickBotonCrearRepartidores() {
    await this.linkCrearRepartidor.click();
  }

  async clickBotonListarRepartidores() {
    await this.linkListarRepartidores.click();
  }

  async clickBotonCrearRepartidor() {
    await this.botonCrearRepartidor.click();
  }

  async ingresarIdentificacion(identificacion) {
    await this.identificacion.sendKeys(identificacion);
  }

  async ingresarNombres(nombres) {
    await this.nombres.sendKeys(nombres);
  }

  async ingresarApellidos(apellidos) {
    await this.apellidos.sendKeys(apellidos);
  }

  async ingresarTelefono(telefono) {
    await this.telefono.sendKeys(telefono);
  }

  async contarRepartidores() {
    return this.listaRepartidores.count();
  }

  async clickBotonEliminarRepartidor(idRepartidor) {
    await element(by.id(`borrar-${idRepartidor}`)).click();
  }
}
