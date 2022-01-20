import {Component, OnInit} from '@angular/core';
import {Repartidor} from '../../shared/model/repartidor';
import {RepartidorService} from '../../shared/service/repartidor.service';
import {ToastService} from '@core-service/toast.service';


@Component({
  selector: 'app-listar-repartidor',
  templateUrl: './listar-repartidor.component.html',
  styleUrls: ['./listar-repartidor.component.sass']
})
export class ListarRepartidorComponent implements OnInit {
  public listaRepartidores: Repartidor[];

  constructor(protected repartidorService: RepartidorService, protected toastService: ToastService) {
  }

  ngOnInit() {
    this.consultarRepartidores();
  }

  consultarRepartidores() {
    this.repartidorService.consultar().subscribe(repartidores => this.listaRepartidores = repartidores);
  }

  eliminarRepartidor(repartidor: Repartidor) {
    this.repartidorService.eliminar(repartidor).subscribe(
      res => {
        console.log(res);
        this.removerRepartidorDeLista(this.listaRepartidores, repartidor);
        this.showSuccess('Eliminado exitoso');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }

  removerRepartidorDeLista(repartidores: Repartidor[], repartidor: Repartidor) {
    const i = repartidores.indexOf(repartidor);
    if (i !== -1) {
      repartidores.splice(i, 1);
    }
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

}
