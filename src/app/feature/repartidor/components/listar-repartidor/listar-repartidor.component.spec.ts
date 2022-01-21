import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {ListarRepartidorComponent} from './listar-repartidor.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RepartidorService} from '../../shared/service/repartidor.service';
import {Repartidor} from '../../shared/model/repartidor';
import {HttpService} from 'src/app/core/services/http.service';

describe('ListarRepartidorComponent', () => {
  let component: ListarRepartidorComponent;
  let fixture: ComponentFixture<ListarRepartidorComponent>;
  let repartidorService: RepartidorService;
  const listaRepartidores: Repartidor[] = [
    new Repartidor(1, '102654', 'nombre', 'apellido', '3013245'),
    new Repartidor(2, '1026545', 'nombredos', 'apellidosdos', '2165465')
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRepartidorComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [RepartidorService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRepartidorComponent);
    component = fixture.componentInstance;
    repartidorService = TestBed.inject(RepartidorService);
    spyOn(repartidorService, 'consultar').and.returnValue(
      of(listaRepartidores)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.listaRepartidores.length).toBe(2);
  });

  it('should list repartidores', () => {
    expect(component.listaRepartidores.length).toBe(2);
  });

  it('should delete repartidor', () => {
    component.removerRepartidorDeLista(listaRepartidores, listaRepartidores[0]);
    expect(component.listaRepartidores.length).toBe(1);
  });

});
