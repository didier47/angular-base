import {NavbarPage} from '../page/navbar/navbar.po';
import {AppPage} from '../app.po';
import {ToastPage} from '../page/toast/toast.po';
import {browser} from 'protractor';
import {ItemPage} from '../page/item/item.po';


describe('workspace-project Item', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let item: ItemPage;
  let toast: ToastPage;
  browser.manage().window().maximize();

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    item = new ItemPage();
    toast = new ToastPage();
  });

  it('Deberia crear item', () => {
    const REFERENCIA = 'Martillo-12333233';
    const NOMBRE = 'Martillo Acero';
    const CANTIDAD = 2;

    page.navigateTo();
    navBar.clickBotonItems();
    item.clickBotonCrearItems();
    item.ingresarReferencia(REFERENCIA);
    item.ingresarNombre(NOMBRE);
    item.ingresarCantidad(CANTIDAD);
    item.clickBotonCrearItem();
    browser.sleep(1000);
    expect(toast.getNotificacion()).toEqual('Registro exitoso');
  });

  it('Deberia listar items', () => {
    page.navigateTo();
    navBar.clickBotonItems();
    item.clickBotonListarItems();
    expect(item.contarItems()).toBeGreaterThanOrEqual(1);
  });

  it('Deberia eliminar un item', () => {
    const ID_ITEM = 4;

    page.navigateTo();
    navBar.clickBotonItems();
    item.clickBotonListarItems();
    browser.sleep(1000);
    item.clickBotonEliminarItem(ID_ITEM);
    browser.sleep(1000);

    expect(toast.getNotificacion()).toEqual('Eliminado exitoso');
  });
});
