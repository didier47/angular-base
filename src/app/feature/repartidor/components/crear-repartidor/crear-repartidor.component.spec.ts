import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearRepartidorComponent } from './crear-repartidor.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RepartidorService } from '../../shared/service/repartidor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearRepartidorComponent', () => {
  let component: CrearRepartidorComponent;
  let fixture: ComponentFixture<CrearRepartidorComponent>;
  let repartidorService: RepartidorService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRepartidorComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [RepartidorService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRepartidorComponent);
    component = fixture.componentInstance;
    repartidorService = TestBed.inject(RepartidorService);
    spyOn(repartidorService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.repartidorForm.valid).toBeFalsy();
  });

  it('Registrando repartidor', () => {
    expect(component.repartidorForm.valid).toBeFalsy();
    component.repartidorForm.controls.id.setValue('001');
    component.repartidorForm.controls.descripcion.setValue('Repartidor test');
    expect(component.repartidorForm.valid).toBeTruthy();

    component.cerrar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
