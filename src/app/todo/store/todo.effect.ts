import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todoActionGroup } from "./todo.action";
import { map, of, switchMap } from "rxjs";
import { Todo } from "../model/todo";
import { UUID_TOKEN } from "src/app/injection tokens/uuid.injection-token";
@Injectable({ providedIn: 'root' })
export class TodoEffect {
  uuid = inject(UUID_TOKEN);
  loadTodosEffct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActionGroup.getTodos),
      switchMap((action) =>
        of([
          new Todo(this.uuid(), 'lundi', 'faire du NgRx'),
          new Todo(this.uuid(), 'mardi', 'faire du ZoneJs'),
        ])
      ),
      map((todos) => todoActionGroup.todosLoaded({ todos }))
    )
  );

  constructor(private actions$: Actions) {}
}
