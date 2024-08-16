import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable,  Subscription,  debounce,  debounceTime, distinctUntilChanged, from, switchMap } from "rxjs";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { Cv } from "../model/cv.model";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  form!: FormGroup;
  cvs$!: Observable<Cv[]>;

  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl() });
    const nameInput = this.form.controls['name'];
    this.cvs$! = nameInput.valueChanges;

  }

}
