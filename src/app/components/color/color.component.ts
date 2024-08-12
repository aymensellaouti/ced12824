import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';
  // State : gére la couleur de background de la div
  color = this.defaultColor;

  changeColor(newColor: HTMLInputElement) {
    this.color = newColor.value;
    newColor.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
