import { Component, inject, Inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LOGGER_TOKEN } from 'src/app/injection tokens/logger.injection-token';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHello } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs = this.cvService.getCvs();
  selectedCv: Cv | null = null;
  constructor(
    // @Inject(LOGGER_TOKEN)
    // @Inject(LoggerService)
    private loggerService: LoggerService,
    private sayHello: SayHello,
    @Inject(LOGGER_TOKEN)
    private loggers: LoggerService[],
    private todoService: TodoService
  )
  {
    this.loggerService.logger('cv component');
    this.sayHello.hello();
    this.cvService.selectCv$.subscribe(
      cv => this.selectedCv = cv
    )
    this.loggers.forEach((loggerService) => loggerService.logger('cc'));
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    // this.todoService.logTodos();
  }
}
