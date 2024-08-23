import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { Store } from "@ngrx/store";
import { todoActionGroup } from "../store/todo.action";
import { Observable } from "rxjs";
import { selectTodos } from "../store/todo.selectors";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent {
  todoService = inject(TodoService);
  store = inject(Store);
  // La liste des todos
  todos$: Observable<Todo[]> = this.store.select(selectTodos);
  // Le formulaire d'ajout de todo
  todo = new Todo();
  constructor() { this.store.dispatch(todoActionGroup.getTodos())}
  addTodo() {
    // this.todoService.addTodo(this.todo);
    this.store.dispatch(todoActionGroup.addTodo({ todo: this.todo }));
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    //this.todoService.deleteTodo(todo);
    this.store.dispatch(todoActionGroup.deleteTodo({ id: todo.id }));
  }
}
