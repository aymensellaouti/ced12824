import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { Todo } from "../model/todo";

export const todoActionGroup = createActionGroup({
  source: 'Todo Component',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    deleteTodo: props<{ id: string }>(),
    'get Todos': emptyProps(),//effect
    'todos loaded': props<{ todos: Todo[] }>(),//reducer
  },
});
