import {by, element} from 'protractor';

export class ItemPage {
  private linkCrearItem = element(by.id('linkCrearItem'));
  private linkListarItems = element(by.id('linkListarItem'));
  private botonCrearItem = element(by.id('btnCrearItem'));
  private referencia = element(by.id('referencia'));
  private nombre = element(by.id('nombre'));
  private cantidad = element(by.id('cantidad'));
  private listaItems = element.all(by.css('app-root app-item app-listar-item table tbody tr'));


  async clickBotonCrearItems() {
    await this.linkCrearItem.click();
  }

  async clickBotonListarItems() {
    await this.linkListarItems.click();
  }

  async clickBotonCrearItem() {
    await this.botonCrearItem.click();
  }

  async ingresarReferencia(referencia) {
    await this.referencia.sendKeys(referencia);
  }

  async ingresarNombre(nombre) {
    await this.nombre.sendKeys(nombre);
  }

  async ingresarCantidad(cantidad) {
    await this.cantidad.sendKeys(cantidad);
  }

  async contarItems() {
    return this.listaItems.count();
  }

  async clickBotonEliminarItem(idItem) {
    await element(by.id(`borrar-${idItem}`)).click();
  }
}
