import { createReducer, on } from '@ngrx/store';
import { CreateTarget, DeleteItem, LoadToDO, UpdateItem } from '../actions/counter.actions';
import { ToDoItem } from '../models/item';
import { initialState, ToDoState } from '../models/todo-state';


export const toDoReducer = createReducer(
  initialState,
  on(LoadToDO, (state) => {
    return state;
  }),
  on(CreateTarget, (state, { item }) => {
    return state.concat(item);
  }),
  on(UpdateItem, (state, { name, changedTarget }) => {
    return state.map((item) => (item.value === name ? changedTarget : item));
  }),
  on(DeleteItem, (state, { name }) => {
    return state.filter(item => item.value !== name )
  })
);
