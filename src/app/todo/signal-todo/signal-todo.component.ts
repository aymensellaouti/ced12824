import { Component, computed, inject, Signal, signal } from "@angular/core";


import { FormsModule } from "@angular/forms";
import { ListTodosComponent } from "../list-todos/list-todos.component";
import { SignalTodoService } from "./signal-todo.service";
import { SignalTodo, TodoStatusEnum } from "../model/signalTodo.model";

@Component({
  selector: 'app-signal-todo',
  templateUrl: './signal-todo.component.html',
  styleUrls: ['./signal-todo.component.css'],
})
export class SignalTodoComponent {
  $todos: Signal<SignalTodo[]>;
  todo = signal(new SignalTodo());
  signalTodoService = inject(SignalTodoService);
  // SYNCHRONE

  $waitingTodos = computed(() => this.$todos().filter( todo => todo.status === TodoStatusEnum.WAITING));
  $inProgressTodos = computed(() => this.$todos().filter( todo => todo.status === TodoStatusEnum.IN_PROGRESS));
  $doneTodos = computed(() => this.$todos().filter( todo => todo.status === TodoStatusEnum.DONE));

  constructor() {
    this.$todos = this.signalTodoService.$todos;
  }
  addTodo() {
    this.signalTodoService.addTodo(this.todo());
    this.todo.set(new SignalTodo());
  }

  updateTodo(updatetdTodoInfo: {
    id: number;
    status: TodoStatusEnum;
  }) {
    this.signalTodoService.updatetodo(updatetdTodoInfo);
  }
}
