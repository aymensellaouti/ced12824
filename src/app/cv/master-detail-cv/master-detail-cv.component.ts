import { Component, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";

import { CvService } from "../services/cv.service";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Cv } from "../model/cv.model";
@Component({
  selector: 'app-master-detail-cv',
  templateUrl: './master-detail-cv.component.html',
  styleUrls: ['./master-detail-cv.component.css'],
})
export class MasterDetailCvComponent {
  cvs$: Observable<Cv[]> = this.CvService.getCvs();
  constructor(
    private CvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.CvService.selectCv$
    .pipe(takeUntilDestroyed())
    .subscribe(
      cv => this.router.navigate([cv.id], {
        relativeTo: this.activatedRoute
      })
    );
  }
}
