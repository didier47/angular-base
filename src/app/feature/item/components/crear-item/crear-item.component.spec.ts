import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {CrearItemComponent} from './crear-item.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ItemService} from '../../shared/service/item.service';
import {HttpService} from 'src/app/core/services/http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CrearItemComponent', () => {
  let component: CrearItemComponent;
  let fixture: ComponentFixture<CrearItemComponent>;
  let itemService: ItemService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearItemComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ItemService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearItemComponent);
    component = fixture.componentInstance;
    itemService = TestBed.inject(ItemService);
    spyOn(itemService, 'guardar').and.returnValue(
      of({valor: 1})
    );
    spyOn(itemService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          referencia: 'martillo-123',
          nombre: 'Martillo',
          cantidad: 20
        }
      ])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.itemForm.valid).toBeFalsy();
  });

  it('Registrando item', () => {
    expect(component.itemForm.valid).toBeFalsy();
    component.itemForm.controls.referencia.setValue(1);
    component.itemForm.controls.nombre.setValue('Item test');
    component.itemForm.controls.cantidad.setValue(20);
    expect(component.itemForm.valid).toBeTruthy();

    component.crear();

    expect(component.itemForm.valid).toBeTruthy();
  });
});
