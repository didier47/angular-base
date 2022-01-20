import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrearRepartidorComponent} from './components/crear-repartidor/crear-repartidor.component';
import {ListarRepartidorComponent} from './components/listar-repartidor/listar-repartidor.component';
import {RepartidorComponent} from './components/repartidor/repartidor.component';


const routes: Routes = [
  {
    path: '',
    component: RepartidorComponent,
    children: [
      {
        path: 'crear',
        component: CrearRepartidorComponent
      },
      {
        path: 'listar',
        component: ListarRepartidorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule {
}
