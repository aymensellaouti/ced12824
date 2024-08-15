import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService)

  constructor() {
    // Définition de l'observable
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // Je m'inscrit à l'observable
    this.myObservable$
      // 5 4 3 2 1
      .subscribe((val) => {
        console.log(val);
      });
      // setTimeout(() => {
      // Je m'inscrit à l'observable
      this.myObservable$
        // 5 4 3 2 1
        .pipe(
          map( valeurRecu => valeurRecu * 3),
          // 15 12 9 6 3,
          filter( valeurRecu => !(valeurRecu%2))
          // 12 6
        )
        .subscribe({
          next: (val) => { this.toastr.info('' + val);},
          complete: () => {this.toastr.warning('BOOOMMMM !!!!');}
        });

    // }, 3000);
  }
}
