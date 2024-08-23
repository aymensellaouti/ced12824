import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodosComponent } from "./week-todos/week-todos.component";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./store/todo.reducer";

@NgModule({
  declarations: [TodoComponent, WeekTodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    StoreModule.forFeature("todo", todoReducer)
  ],
  exports: [],
  providers: [],
})
export default class TodoModule {}
