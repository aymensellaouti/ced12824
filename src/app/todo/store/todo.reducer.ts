import { createReducer, on } from "@ngrx/store";
import { Todo } from "../model/todo";
import { todoActionGroup } from "./todo.action";
import { v4 as uuidV4 } from 'uuid';
export interface TodoState {
  todos: Todo[]
}

export const initialTodoState: TodoState = {
  todos: [],
}

export const todoReducer = createReducer(
  initialTodoState,
  on(todoActionGroup.addTodo, (state, { todo }) => {
    todo = { ...todo, id: uuidV4() };
    return {
      ...state,
      todos: [...state.todos, todo],
    };
  }),
  on(todoActionGroup.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id != id),
  })),
  on(todoActionGroup.todosLoaded, (state, { todos }) => ({
    ...state,
    todos,
  }))
);
