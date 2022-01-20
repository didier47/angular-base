import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {CrearRepartidorComponent} from './components/crear-repartidor/crear-repartidor.component';
import {RepartidorComponent} from './components/repartidor/repartidor.component';
import {ListarRepartidorComponent} from './components/listar-repartidor/listar-repartidor.component';
import {RepartidorRoutingModule} from './repartidor-routing.module';
import {RepartidorService} from './shared/service/repartidor.service';


@NgModule({
  declarations: [
    CrearRepartidorComponent,
    ListarRepartidorComponent,
    RepartidorComponent
  ],
  imports: [
    RepartidorRoutingModule,
    SharedModule
  ],
  providers: [RepartidorService]
})
export class RepartidorModule {
}
