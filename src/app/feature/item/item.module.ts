import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from '@producto/producto-routing.module';
import { BorrarProductoComponent } from '@producto/components/borrar-producto/borrar-producto.component';
import { ListarProductoComponent } from '@producto/components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from '@producto/components/crear-producto/crear-producto.component';
import { ProductoComponent } from '@producto/components/producto/producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from '@producto/shared/service/producto.service';


@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    BorrarProductoComponent,
    ProductoComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
