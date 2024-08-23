import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { CarreePipe } from './pipes/carree.pipe';
import { LOGGER_TOKEN } from './injection tokens/logger.injection-token';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { SayHello } from './services/sayHello.service';
import { UUID_TOKEN } from './injection tokens/uuid.injection-token';

import {v4 as uuidV4} from 'uuid'
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './form/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { SliderComponent } from './rxjs/slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SignalTodoComponent } from './todo/signal-todo/signal-todo.component';
import { ListTodosComponent } from './todo/list-todos/list-todos.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/global.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { RhComponent } from './optimizationPattern/rh/rh.component';
// import { UserListComponent } from './optimizationPattern/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,

    // Directives
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    CarreePipe,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    //RXJS
    SliderComponent,
    ProductsComponent,

    //Signal
    SignalTodoComponent,
    ListTodosComponent,

    //Optimization
    // RhComponent,
    // UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxUiLoaderModule,
    StoreModule.forRoot({ ux: appReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    authInterceptorProvider,
    {
      // provide: LOGGER_TOKEN,
      provide: LoggerService,
      // useFactory: loggerProviderFactory
      useClass: LoggerService,
    },
    // {
    //   // provide: LOGGER_TOKEN,
    //   provide:LoggerService,
    //   // useFactory: loggerProviderFactory
    //   useClass: Logger2Service
    // },
    {
      provide: LOGGER_TOKEN,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LOGGER_TOKEN,
      useClass: Logger2Service,
      multi: true,
    },
    SayHello,
    {
      provide: UUID_TOKEN,
      useValue: uuidV4,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
