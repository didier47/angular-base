import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarRepartidorComponent } from './listar-repartidor.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RepartidorService } from '../../shared/service/repartidor.service';
import { Repartidor } from '../../shared/model/repartidor';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarRepartidorComponent', () => {
  let component: ListarRepartidorComponent;
  let fixture: ComponentFixture<ListarRepartidorComponent>;
  let repartidorService: RepartidorService;
  const listaRepartidores: Repartidor[] = [new Repartidor(1, 'referencia', 'nombre', 20), new Repartidor(2, 'referenciados', 'nombredos', 10)];

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
    component.listaRepartidores.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
