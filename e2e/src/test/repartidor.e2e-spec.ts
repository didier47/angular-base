import {NavbarPage} from '../page/navbar/navbar.po';
import {AppPage} from '../app.po';
import {ToastPage} from '../page/toast/toast.po';
import {browser} from 'protractor';
import {RepartidorPage} from '../page/repartidor/repartidor.po';


describe('workspace-project Repartidor', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let repartidor: RepartidorPage;
  let toast: ToastPage;
  browser.manage().window().maximize();

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    repartidor = new RepartidorPage();
    toast = new ToastPage();
  });

  it('Deberia crear repartidor', () => {
    const IDENTIFICACION = '106164598';
    const NOMBRES = 'Camilo';
    const APELLIDOS = 'Arias Sanchez';
    const TELEFONO = '3015467896';

    page.navigateTo();
    navBar.clickBotonRepartidores();
    repartidor.clickBotonCrearRepartidores();
    repartidor.ingresarIdentificacion(IDENTIFICACION);
    repartidor.ingresarNombres(NOMBRES);
    repartidor.ingresarApellidos(APELLIDOS);
    repartidor.ingresarTelefono(TELEFONO);
    repartidor.clickBotonCrearRepartidor();
    browser.sleep(1000);
    expect(toast.getNotificacion()).toEqual('Registro exitoso');
  });

  it('Deberia listar repartidores', () => {
    page.navigateTo();
    navBar.clickBotonRepartidores();
    repartidor.clickBotonListarRepartidores();
    expect(repartidor.contarRepartidores()).toBeGreaterThanOrEqual(1);
  });

  it('Deberia eliminar un repartidor', () => {
    const IDENTIFICACION = '106164598';

    page.navigateTo();
    navBar.clickBotonRepartidores();
    repartidor.clickBotonListarRepartidores();
    browser.sleep(1000);
    repartidor.clickBotonEliminarRepartidor(IDENTIFICACION);
    browser.sleep(1000);

    expect(toast.getNotificacion()).toEqual('Eliminado exitoso');
  });
});
