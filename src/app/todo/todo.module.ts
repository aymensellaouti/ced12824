import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodosComponent } from "./week-todos/week-todos.component";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./store/todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffect } from "./store/todo.effect";

@NgModule({
  declarations: [TodoComponent, WeekTodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    StoreModule.forFeature("todo", todoReducer),
    EffectsModule.forFeature([TodoEffect]),
  ],
  exports: [],
  providers: [],
})
export default class TodoModule {}
