import {Component, OnInit} from '@angular/core';
import {VentaService} from '../../shared/service/venta.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Repartidor} from '../../../repartidor/shared/model/repartidor';
import {RepartidorService} from '../../../repartidor/shared/service/repartidor.service';
import {ToastService} from '@core-service/toast.service';
import {ItemService} from '../../../item/shared/service/item.service';
import {IdCantidadItem, Item} from '../../../item/shared/model/item';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.sass']
})
export class CrearVentaComponent implements OnInit {
  ventaForm: FormGroup;
  repartidores: Observable<Repartidor[]>;
  items: Observable<Item[]>;
  ventaItems: IdCantidadItem[];

  constructor(
    protected ventaServices: VentaService,
    protected repartidorServices: RepartidorService,
    protected itemServices: ItemService,
    protected toastService: ToastService) {
    this.ventaItems = [];
  }

  ngOnInit() {
    this.construirFormularioVenta();
    this.consultarRepartidores();
    this.consultarItems();
  }

  agregarItemsAVenta() {
    this.ventaItems.push({
      id: this.ventaForm.get('item').value.id,
      referencia: this.ventaForm.get('item').value.referencia,
      nombre: this.ventaForm.get('item').value.nombre,
      cantidad: this.ventaForm.get('cantidad').value
    });
    this.ventaForm.get('item').setValue({});
    this.ventaForm.get('cantidad').setValue('');
  }

  borrarItemsDeVenta() {
    this.ventaItems = [];
  }

  crear() {
    const data = this.ventaForm.value;
    data.items = this.ventaItems;
    this.ventaServices.guardar(data).subscribe(
      res => {
        if (res.valor > 0) {
          this.ventaForm.reset();
          this.showSuccess('Registro exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }

  consultarRepartidores() {
    this.repartidores = this.repartidorServices.consultar();
  }

  consultarItems() {
    this.items = this.itemServices.consultar();
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

  private construirFormularioVenta() {
    this.ventaForm = new FormGroup({
      referencia: new FormControl('', [Validators.required]),
      fechaEntrega: new FormControl('', [Validators.required]),
      distancia: new FormControl('', [Validators.required]),
      idRepartidor: new FormControl('', [Validators.required]),
      item: new FormControl(''),
      cantidad: new FormControl('')
    });
  }

}
