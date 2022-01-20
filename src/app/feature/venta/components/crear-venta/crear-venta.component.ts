import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/service/item.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-item',
  templateUrl: './crear-item.component.html',
  styleUrls: ['./crear-item.component.sass']
})
export class CrearItemComponent implements OnInit {
  itemForm: FormGroup;
  constructor(protected itemServices: ItemService) { }

  ngOnInit() {
    this.construirFormularioItem();
  }

  cerar() {
    this.itemServices.guardar(this.itemForm.value);
  }

  private construirFormularioItem() {
    this.itemForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
