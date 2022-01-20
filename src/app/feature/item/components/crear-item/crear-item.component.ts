import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../shared/service/item.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '@core-service/toast.service';

@Component({
  selector: 'app-crear-item',
  templateUrl: './crear-item.component.html',
  styleUrls: ['./crear-item.component.sass']
})
export class CrearItemComponent implements OnInit {
  itemForm: FormGroup;

  constructor(
    protected itemServices: ItemService,
    protected toastService: ToastService) {
  }

  ngOnInit() {
    this.construirFormularioItem();
  }

  crear() {
    this.itemServices.guardar(this.itemForm.value).subscribe(
      res => {
        if (res.valor > 0) {
          this.itemForm.reset();
          this.showSuccess('Registro exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

  private construirFormularioItem() {
    this.itemForm = new FormGroup({
      referencia: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required])
    });
  }

}
