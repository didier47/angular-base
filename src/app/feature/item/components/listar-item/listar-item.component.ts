import {Component, OnInit} from '@angular/core';
import {Item} from '../../shared/model/item';
import {ItemService} from '../../shared/service/item.service';
import {ToastService} from '@core-service/toast.service';


@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.sass']
})
export class ListarItemComponent implements OnInit {
  public listaItems: Item[];

  constructor(protected itemService: ItemService, protected toastService: ToastService) {
  }

  ngOnInit() {
    this.consultarItems();
  }

  consultarItems() {
    this.itemService.consultar().subscribe(items => this.listaItems = items);
  }

  eliminarItem(item: Item) {
    this.itemService.eliminar(item).subscribe(
      res => {
        console.log(res);
        this.removerItemDeLista(this.listaItems, item);
        this.showSuccess('Eliminado exitoso');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }

  removerItemDeLista(items: Item[], item: Item) {
    const i = items.indexOf(item);
    if (i !== -1) {
      items.splice(i, 1);
    }
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

}
