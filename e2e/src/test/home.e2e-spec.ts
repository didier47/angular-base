import { HomePage } from '../page/home/home.po';

describe('workspace-project Cliente', () => {
  let home: HomePage;
  beforeEach(() => {
    home = new HomePage();
  });

  it('Mostrar inicio', () => {
    home.navigateTo();
    expect(home.getCardHeader()).toEqual('Ferretería Gaona');
    expect(home.getCardText()).toEqual('Compra implementos para tu trabajo');
    expect(home.getButton()).toEqual('Ventas');
    home.clickBotonVentas();
  });
});
