import {NavbarPage} from '../page/navbar/navbar.po';
import {AppPage} from '../app.po';
import {ToastPage} from '../page/toast/toast.po';
import {browser} from 'protractor';
import {VentaPage} from '../page/venta/venta.po';


describe('workspace-project Venta', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let venta: VentaPage;
  let toast: ToastPage;
  browser.manage().window().maximize();

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    venta = new VentaPage();
    toast = new ToastPage();
  });

  it('Deberia crear venta', () => {
    const REFERENCIA = 'Martillo-12333233';
    const FECHA_ENTREGA = '2021-01-25';
    const DISTANCIA = 20;
    const ID_REPARTIDOR = 2;
    const ITEMS = [{id: 1, cantidad: 2}];

    page.navigateTo();
    navBar.clickBotonVentas();
    venta.clickBotonCrearVentas();
    venta.ingresarReferencia(REFERENCIA);
    venta.ingresarFechaEntrega(FECHA_ENTREGA);
    venta.ingresarDistancia(DISTANCIA);
    venta.ingresarIdRepartidor(ID_REPARTIDOR);
    venta.ingresarListaItems(ITEMS);
    venta.clickBotonCrearVenta();
    browser.sleep(1000);
    expect(toast.getNotificacion()).toEqual('Registro exitoso');
  });

  it('Deberia listar ventas', () => {
    page.navigateTo();
    navBar.clickBotonVentas();
    venta.clickBotonListarVentas();
    expect(venta.contarVentas()).toBeGreaterThanOrEqual(1);
  });

  it('Deberia eliminar un venta', () => {
    const ID_ITEM = 4;

    page.navigateTo();
    navBar.clickBotonVentas();
    venta.clickBotonListarVentas();
    browser.sleep(1000);
    venta.clickBotonEliminarVenta(ID_ITEM);
    browser.sleep(1000);

    expect(toast.getNotificacion()).toEqual('Eliminado exitoso');
  });
});
