import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrls: ['./first-signal.component.css'],
})
export class FirstSignalComponent {
  x = 5;
  y = 7;
  z = this.x + this.y;

  increment(element: number) {
    console.log('click');

    element = element + 1;
  }
}
