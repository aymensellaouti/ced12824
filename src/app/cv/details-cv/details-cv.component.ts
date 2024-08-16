import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { AuthService } from "src/app/auth/services/auth.service";
import { catchError, EMPTY, Observable } from "rxjs";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  cv$: Observable<Cv> = this.cvService.getCvById(this.acr.snapshot.params['id']).pipe(
    catchError(
      (e) => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      }
    )
  );
  authService = inject(AuthService);
  router = inject(Router);
  constructor() {
    // const id = ;
    // .subscribe({
    //   next: (cv) => (this.cv = cv),
    //   error: (err) => this.router.navigate([APP_ROUTES.cv]),
    // });
  }

  deleteCv(cv: Cv) {
      this.cvService.deleteCvId(cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cv]),
        error: (e) => console.log(e),
      });
    }
}
