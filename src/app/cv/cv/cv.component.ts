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
      'rotating_card_profile2.png'
    ),
    new Cv(
      2,
      'Dali',
      'sourour',
      'Dev',
      '1234',
      20,
      'rotating_card_profile.png'
    ),
  ];
}
