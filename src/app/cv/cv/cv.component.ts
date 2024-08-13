import { Component, Inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LOGGER_TOKEN } from 'src/app/injection tokens/logger.injection-token';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHello } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'trainer', '123', 42, ''),
    new Cv(2, 'Dali', 'sourour', 'Dev', '1234', 20, '     '),
  ];
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
    this.loggers.forEach((loggerService) => loggerService.logger('cc'));
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    // this.todoService.logTodos();
  }
}
