import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    // Directives
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    CarreePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  {
    // provide: LOGGER_TOKEN,
    provide:LoggerService,
    // useFactory: loggerProviderFactory
    useClass: LoggerService
  },
  {
    // provide: LOGGER_TOKEN,
    provide:LoggerService,
    // useFactory: loggerProviderFactory
    useClass: Logger2Service
  },
  SayHello,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
