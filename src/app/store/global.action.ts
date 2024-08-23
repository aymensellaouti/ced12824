import { createAction, props } from "@ngrx/store";

export const initAppAction = createAction('[App Component] init App Name', props<{name: string}>());
