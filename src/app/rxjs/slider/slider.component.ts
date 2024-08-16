
import { Component, Input } from '@angular/core';
import { forkJoin, map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() images: string[] = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  @Input() intervalTimer = 1000;
  @Input() size = 150;
  slider$: Observable<string> = timer(0,this.intervalTimer).pipe(
    // 0 1 2 3 4 5
    map( index => this.images[index % this.images.length])
    //=>
  )

}
