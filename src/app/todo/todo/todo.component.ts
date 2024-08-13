import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {
 todoService = inject(TodoService);
  // La liste des todos
 todos: Todo[] = this.todoService.getTodos();;
 // Le formulaire d'ajout de todo
 todo = new Todo();

 addTodo() {
  this.todoService.addTodo(this.todo);
  this.todo = new Todo();
 }
 deleteTodo(todo: Todo) {
  this.todoService.deleteTodo(todo);
 }
}
