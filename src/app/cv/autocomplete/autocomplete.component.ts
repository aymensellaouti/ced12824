import { Component, DestroyRef, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable,  Subscription,  debounce,  debounceTime, distinctUntilChanged, from, switchMap } from "rxjs";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { Cv } from "../model/cv.model";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnDestroy {
  form!: FormGroup;
  cvs$!: Observable<Cv[]>;
  subscription!: Subscription;

  constructor(
    private cvService: CvService,
    private router: Router,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl() });
    const nameInput = this.form.controls['name'];
    this.cvs$! = nameInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef),
      // contenu de l'input
      switchMap((name) => this.cvService.getCvsByName(name))
    );

    this.subscription = this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate(['/cv', cv.id])
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
