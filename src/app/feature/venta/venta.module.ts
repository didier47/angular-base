import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {CrearVentaComponent} from './components/crear-venta/crear-venta.component';
import {VentaComponent} from './components/venta/venta.component';
import {ListarVentaComponent} from './components/listar-venta/listar-venta.component';
import {VentaRoutingModule} from './venta-routing.module';
import {VentaService} from './shared/service/venta.service';
import {ItemService} from '../item/shared/service/item.service';
import {RepartidorService} from '../repartidor/shared/service/repartidor.service';


@NgModule({
  declarations: [
    CrearVentaComponent,
    ListarVentaComponent,
    VentaComponent
  ],
  imports: [
    VentaRoutingModule,
    SharedModule
  ],
  providers: [VentaService, RepartidorService, ItemService]
})
export class VentaModule {
}
