import { Injectable, Signal, signal } from "@angular/core";
import { SignalTodo, TodoStatusEnum } from "../model/signalTodo.model";


@Injectable({ providedIn: 'root' })
export class SignalTodoService {
  #todos = signal<SignalTodo[]>([]);

  get $todos() {
    return this.#todos.asReadonly();
  }
  addTodo(todo: SignalTodo) {
    this.$todos().length
      ? (todo.id = this.$todos()[this.$todos().length - 1].id + 1)
      : (todo.id = 1);

    todo.status = TodoStatusEnum.WAITING;
    this.#todos.update((todos) => [...todos, todo]);
  }

  updatetodo(updatetdTodoInfo: { id: number; status: TodoStatusEnum }) {
    this.#todos.update((todos) => todos.map(
      (todo: SignalTodo) => {
        if (todo.id == updatetdTodoInfo.id) {
          return {...todo, status: updatetdTodoInfo.status}
        }
        return todo;
      }
    ));
  }
}
