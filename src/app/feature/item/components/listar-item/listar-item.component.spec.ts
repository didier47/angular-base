import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {ListarItemComponent} from './listar-item.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ItemService} from '../../shared/service/item.service';
import {Item} from '../../shared/model/item';
import {HttpService} from 'src/app/core/services/http.service';

describe('ListarItemComponent', () => {
  let component: ListarItemComponent;
  let fixture: ComponentFixture<ListarItemComponent>;
  let itemService: ItemService;
  const listaItems: Item[] = [
    new Item(1, 'referencia', 'nombre', 20),
    new Item(2, 'referenciados', 'nombredos', 10)
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarItemComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ItemService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemComponent);
    component = fixture.componentInstance;
    itemService = TestBed.inject(ItemService);
    spyOn(itemService, 'consultar').and.returnValue(
      of(listaItems)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.listaItems.length).toBe(2);
  });

  it('should list items', () => {
    expect(component.listaItems.length).toBe(2);
  });

  it('should delete item', () => {
    component.removerItemDeLista(listaItems, listaItems[0]);
    expect(component.listaItems.length).toBe(1);
  });

});
