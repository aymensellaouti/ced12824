import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'trainer',
      '123',
      42,
      ''
    ),
    new Cv(
      2,
      'Dali',
      'sourour',
      'Dev',
      '1234',
      20,
      '     '
    ),
  ];
  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
