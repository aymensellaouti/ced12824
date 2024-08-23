import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AppState } from './store/global.reducer';
import { initAppAction } from './store/global.action';
import { HttpClient } from '@angular/common/http';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { APP_CONSTANTES } from './config/constantes.config';

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
  http = inject(HttpClient);
  swUpdate = inject(SwUpdate);
  swPush = inject(SwPush);
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
    this.store.dispatch(initAppAction({ name: 'CED' }));
    this.swUpdate.versionUpdates.subscribe((version) => {
      console.log('Checking Version Update');

      if (version.type === 'VERSION_READY') {
        console.log('VERSION READY');

        if (
          confirm(
            `Une nouvelle version de l'application est disponionible, vouslez vous recharger la page ?`
          )
        ) {
          window.location.reload();
        }
      }
    });
  }

  subscribeToNotifications() {
    console.log('In subscribeToNotifications');
    this.swPush
      .requestSubscription({
        serverPublicKey: APP_CONSTANTES.vapidKeys.publicKey,
      })
      .then((sub: PushSubscription) => {
        // Faites ce que vous voulez avec cet objet
        console.log({ sub });
        this.http
            .post('https://nest-push-ghxv.vercel.app/notifications', sub)
            .subscribe((data) => console.log({ data: data }));
      })
      .catch((err) => {
        //en cas de refus});
        console.log('pbm');
        console.log({ err });
      });
  }
}
