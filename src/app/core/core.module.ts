import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecurityGuard} from './guard/security.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token-interceptor';
import {AuthInterceptor} from './interceptor/auth-interceptor';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpService} from './services/http.service';
import {ManejadorError} from './interceptor/manejador-error';
import {RouterModule} from '@angular/router';
import {ToastComponent} from '@core/components/toast/toast.component';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent, ToastComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbToastModule
  ],
  exports: [ToolbarComponent, NavbarComponent, ToastComponent],
  providers: [
    HttpService,
    SecurityGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: ErrorHandler, useClass: ManejadorError}
  ]
})
export class CoreModule {
}
