import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AppState } from './store/global.reducer';
import { initAppAction } from './store/global.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ced12824';
  router = inject(Router);
  store: Store<AppState> = inject(Store);
  ngxSpinnerService = inject(NgxUiLoaderService);
  constructor() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     // start spinner
    //     this.ngxSpinnerService.start();
    //   } else if (
    //     event instanceof NavigationEnd ||
    //     event instanceof NavigationCancel ||
    //     event instanceof NavigationError
    //   ) {
    //     // close spinner
    //     //console.log('close spinner');
    //     this.ngxSpinnerService.stop();
    //   }
    // });
    this.store.dispatch(initAppAction({name:'CED'}));
  }
}
