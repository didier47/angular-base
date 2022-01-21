import {by, element} from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkVentas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
  linkItems = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
  linkRepartidores = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

  async clickBotonVentas() {
    await this.linkVentas.click();
  }

  async clickBotonItems() {
    await this.linkItems.click();
  }

  async clickBotonRepartidores() {
    await this.linkRepartidores.click();
  }

}
