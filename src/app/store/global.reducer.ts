import { createReducer, on } from "@ngrx/store";
import { initAppAction } from "./global.action";
import { initialTodoState, TodoState } from "../todo/store/todo.reducer";

export interface AppState {
  appName: string;
  todo: TodoState;
}

export const initialAppState: AppState = {
  appName: '',
  todo: initialTodoState
}

export const appReducer = createReducer(
  initialAppState,
  on(initAppAction, (stateLe9dim, {name}) => ({
    ...stateLe9dim,
    appName: name
  }))
)
