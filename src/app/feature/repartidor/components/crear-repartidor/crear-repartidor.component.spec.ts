import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearItemComponent } from './crear-item.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemService } from '../../shared/service/item.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearItemComponent', () => {
  let component: CrearItemComponent;
  let fixture: ComponentFixture<CrearItemComponent>;
  let itemService: ItemService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearItemComponent ],
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
      of(true)
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
    component.itemForm.controls.id.setValue('001');
    component.itemForm.controls.descripcion.setValue('Item test');
    expect(component.itemForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
