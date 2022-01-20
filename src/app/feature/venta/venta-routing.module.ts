import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrearItemComponent} from './components/crear-item/crear-item.component';
import {ListarItemComponent} from './components/listar-item/listar-item.component';
import {BorrarItemComponent} from './components/borrar-item/borrar-item.component';
import {ItemComponent} from './components/item/item.component';


const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    children: [
      {
        path: 'crear',
        component: CrearItemComponent
      },
      {
        path: 'listar',
        component: ListarItemComponent
      },
      {
        path: 'borrar',
        component: BorrarItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule {
}
