import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { FormsModule } from '@angular/forms';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { TodoComponent } from './todo/todo/todo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { CarreePipe } from './pipes/carree.pipe';
import { loggerProviderFactory } from './provider factory/logger.provider-factory';
import { LOGGER_TOKEN } from './injection tokens/logger.injection-token';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { SayHello } from './services/sayHello.service';
import { WeekTodosComponent } from './todo/week-todos/week-todos.component';
import { UUID_TOKEN } from './injection tokens/uuid.injection-token';

import {v4 as uuidV4} from 'uuid'
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './form/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';


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
    TodoComponent,

    // Cvs
    CvComponent,
    CvListComponent,
    CvCardComponent,
    CvItemComponent,
    DetailsCvComponent,
    EmbaucheComponent,

    // Directives
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    CarreePipe,
    WeekTodosComponent,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
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
