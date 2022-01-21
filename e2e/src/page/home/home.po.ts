import {browser, by, element} from 'protractor';

export class HomePage {
  private cardHeader = element(by.css('app-root .card-header'));
  private cardText = element(by.css('app-root .card-text'));
  private buttonVentas = element(by.css('app-root .btn'));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCardHeader() {
    return this.cardHeader.getText() as Promise<string>;
  }

  getCardText() {
    return this.cardText.getText() as Promise<string>;
  }

  getButton() {
    return this.buttonVentas.getText() as Promise<string>;
  }

  async clickBotonVentas() {
    await this.buttonVentas.click();
  }
}
