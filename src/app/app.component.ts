import {Component} from '@angular/core';
import {MenuItem} from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-base';
  public menuItems: MenuItem[] = [
    {url: '/home', nombre: 'Inicio'},
    {url: '/venta/listar', nombre: 'Ventas'},
    {url: '/item/listar', nombre: 'Items'},
    {url: '/repartidor/listar', nombre: 'Repartidores'}
  ];
}
