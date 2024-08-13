import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
})
export class CvItemComponent {
  @Input({required: true})
  cv!: Cv;
  @Output() selectCv = new EventEmitter<Cv>();
  onClick() {
    this.selectCv.emit(this.cv);;
  }
  carre(element: number) {
    const result = element * element;
    console.log({result});
    return result;
  }
}
