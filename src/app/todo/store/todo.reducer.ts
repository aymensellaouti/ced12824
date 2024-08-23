import { createReducer } from "@ngrx/store";
import { Todo } from "../model/todo";

export interface TodoState {
  todos: Todo[]
}

export const initialTodoState: TodoState = {
  todos: [],
}

export const todoReducer = createReducer(
  initialTodoState
)
