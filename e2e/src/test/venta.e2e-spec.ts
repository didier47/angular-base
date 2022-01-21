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
    const FECHA_HOY = new Date();
    const REFERENCIA = 'ref-venta-123';
    const FECHA_ENTREGA = FECHA_HOY.getFullYear() + '-' + (FECHA_HOY.getMonth() + 1) + '-' + (FECHA_HOY.getDate() + 10);
    const DISTANCIA = 20;
    const REPARTIDOR = 'Protactor | Protactores';
    const CANTIDAD = 2;
    const ITEM = 'Protractor | Cantidad: 10';

    page.navigateTo();
    navBar.clickBotonVentas();
    venta.clickBotonCrearVentas();
    venta.ingresarReferencia(REFERENCIA);
    venta.ingresarFechaEntrega(FECHA_ENTREGA);
    venta.ingresarDistancia(DISTANCIA);
    venta.ingresarIdRepartidor(REPARTIDOR);
    venta.ingresarListaItem(ITEM);
    venta.ingresarCantidad(CANTIDAD);
    venta.clickBotonAgregarItem();
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
    const REFERENCIA = 'ref-venta-123';

    page.navigateTo();
    navBar.clickBotonVentas();
    venta.clickBotonListarVentas();
    browser.sleep(1000);
    venta.clickBotonEliminarVenta(REFERENCIA);
    browser.sleep(1000);

    expect(toast.getNotificacion()).toEqual('Eliminado exitoso');
  });
});
