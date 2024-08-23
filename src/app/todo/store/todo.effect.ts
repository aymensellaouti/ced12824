import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable({providedIn: 'root'})
export class TodoEffect {

  loadTodosEffct$ = () => this.actions$.pipe();

  constructor(private actions$: Actions) {}
}
