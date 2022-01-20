import {Component, OnInit} from '@angular/core';
import {RepartidorService} from '../../shared/service/repartidor.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Repartidor} from '../../shared/model/repartidor';
import {ToastService} from '@core-service/toast.service';

@Component({
  selector: 'app-crear-repartidor',
  templateUrl: './crear-repartidor.component.html',
  styleUrls: ['./crear-repartidor.component.sass']
})
export class CrearRepartidorComponent implements OnInit {
  repartidorForm: FormGroup;
  repartidores: Observable<Repartidor[]>;

  constructor(
    protected repartidorServices: RepartidorService,
    protected toastService: ToastService) {
  }

  ngOnInit() {
    this.construirFormularioRepartidor();
    this.consultarRepartidores();
  }

  crear() {
    this.repartidorServices.guardar(this.repartidorForm.value).subscribe(
      res => {
        if (res.valor > 0) {
          this.repartidorForm.reset();
          this.showSuccess('Registro exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }

  consultarRepartidores() {
    this.repartidores = this.repartidorServices.consultar();
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

  private construirFormularioRepartidor() {
    this.repartidorForm = new FormGroup({
      identificacion: new FormControl('', [Validators.required]),
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
    });
  }

}
