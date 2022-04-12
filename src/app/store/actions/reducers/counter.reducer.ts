import { createReducer, on } from '@ngrx/store';
import {
  CreateTarget,
  DeleteTarget,
  LoadToDO,
  UpdateTarget,
} from '../actions/todo.actions';
import { initialState } from '../state/state';

export const toDoReducer = createReducer(
  initialState,
  on(LoadToDO, (state) => {
    return state;
  }),
  on(CreateTarget, (state, { item }) => {
    return state.concat(item);
  }),
  on(UpdateTarget, (state, { name, changedTarget }) => {
    return state.map((item) => (item.value === name ? changedTarget : item));
  }),
  on(DeleteTarget, (state, { name }) => {
    return state.filter((item) => item.value !== name);
  })
);
