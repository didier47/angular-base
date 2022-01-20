import {Component, OnInit} from '@angular/core';
import {Venta} from '../../shared/model/venta';
import {VentaService} from '../../shared/service/venta.service';
import {ToastService} from '@core-service/toast.service';


@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.sass']
})
export class ListarVentaComponent implements OnInit {
  public listaVentas: Venta[];

  constructor(protected ventaService: VentaService, protected toastService: ToastService) {
  }

  ngOnInit() {
    this.consultarVentas();
  }

  consultarVentas() {
    this.ventaService.consultar().subscribe(ventas => this.listaVentas = ventas);
  }

  eliminarVenta(venta: Venta) {
    this.ventaService.eliminar(venta).subscribe(
      res => {
        console.log(res);
        this.removerVentaDeLista(this.listaVentas, venta);
        this.showSuccess('Eliminado exitoso');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }

  removerVentaDeLista(ventas: Venta[], venta: Venta) {
    const i = ventas.indexOf(venta);
    if (i !== -1) {
      ventas.splice(i, 1);
    }
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

}
