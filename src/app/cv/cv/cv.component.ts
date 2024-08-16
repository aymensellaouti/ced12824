import { Component, inject, Inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LOGGER_TOKEN } from 'src/app/injection tokens/logger.injection-token';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHello } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, retry } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
  toastr = inject(ToastrService);
  acr = inject(ActivatedRoute);
  cvs = this.acr.snapshot.data['cvs'];
  constructor(
    // @Inject(LOGGER_TOKEN)
    // @Inject(LoggerService)
    private loggerService: LoggerService,
    private sayHello: SayHello,
    @Inject(LOGGER_TOKEN)
    private loggers: LoggerService[],
    private todoService: TodoService
  ) {
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => this.cvs = cvs,
    //   error: (e) => {
    //     this.toastr.error('Problème d accès au serveur merci de contacter l admin');
    //     this.cvs = this.cvService.getFakeCvs();
    //   }
    // })
    this.loggerService.logger('cv component');
    this.sayHello.hello();
    // this.cvService.selectCv$.subscribe(
    //   cv => this.selectedCv = cv
    // )
    this.loggers.forEach((loggerService) => loggerService.logger('cc'));
  }
}
