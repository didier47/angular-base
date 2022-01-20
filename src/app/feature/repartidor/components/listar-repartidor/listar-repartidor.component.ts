import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../../shared/model/item';
import {ItemService} from '../../shared/service/item.service';


@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.sass']
})
export class ListarItemComponent implements OnInit {
  public listaItems: Observable<Item[]>;

  constructor(protected itemService: ItemService) {
  }

  ngOnInit() {
    this.listaItems = this.itemService.consultar();
  }

}
