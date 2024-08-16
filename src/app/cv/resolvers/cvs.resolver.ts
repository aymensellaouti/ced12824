import { ResolveFn } from '@angular/router';
import { Cv } from '../model/cv.model';
import { Observable, retry, catchError, of } from 'rxjs';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

export const cvsResolver: ResolveFn<Cv[]> = (route, state) => {

  const cvService = inject(CvService);

  const toastr = inject(ToastrService);
  return  cvService.getCvs().pipe(
    retry({
      delay:2000,
      count: 3
    }),
    catchError( e => {
      toastr.error(
        'Problème d accès au serveur merci de contacter l admin'
      );
      return of(cvService.getFakeCvs());
    })
  );;
};
