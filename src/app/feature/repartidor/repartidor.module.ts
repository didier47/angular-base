import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {CrearItemComponent} from './components/crear-item/crear-item.component';
import {ItemComponent} from './components/item/item.component';
import {BorrarItemComponent} from './components/borrar-item/borrar-item.component';
import {ListarItemComponent} from './components/listar-item/listar-item.component';
import {ItemRoutingModule} from './item-routing.module';
import {ItemService} from './shared/service/item.service';


@NgModule({
  declarations: [
    CrearItemComponent,
    ListarItemComponent,
    BorrarItemComponent,
    ItemComponent
  ],
  imports: [
    ItemRoutingModule,
    SharedModule
  ],
  providers: [ItemService]
})
export class ItemModule {
}
