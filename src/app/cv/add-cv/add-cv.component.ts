import { Component } from '@angular/core';
import { Validators, AbstractControlOptions, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  form = this.formBuilder.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    path: [''],
    job: ['', Validators.required],
    cin: [
      '',
      {
        validators: [Validators.required, Validators.pattern('[0-8]{8}')],
      },
    ],
    age: [
      0,
      {
        validators: [Validators.required],
      },
    ],
  });
  constructor(private formBuilder: FormBuilder) {
    console.log('adding cv component');
  }

  addCv() {

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
