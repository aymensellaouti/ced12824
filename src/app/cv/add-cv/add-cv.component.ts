import { Component, inject } from '@angular/core';
import { Validators, AbstractControlOptions, FormBuilder, AbstractControl } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv.model';
import { catchError, EMPTY, tap } from 'rxjs';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  form = this.formBuilder.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    path: [''],
    job: ['', Validators.required],
    cin: [
      '',
      {
        validators: [Validators.required, Validators.pattern('[0-9]{8}')],
      },
    ],
    age: [
      0,
      {
        validators: [Validators.required],
      },
    ],
  });
  constructor() {
    console.log('adding cv component');
  }

  addCv() {
    this.cvService.addCv(this.form.value as Cv)
    .pipe(
      tap( () => this.router.navigate([APP_ROUTES.cv])),
      catchError(() => {
        this.toastr.error(`Un problème au niveau du serveur veuillez contacter l'admin`)
        return EMPTY;
      })
    )
    .subscribe();
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age() {
    return this.form.get('age');
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
