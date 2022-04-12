import { createReducer, on } from '@ngrx/store';
import { CreateTarget, LoadToDO } from '../actions/counter.actions';
import { ToDoItem } from '../models/item';
import { initialState, ToDoState } from '../models/todo-state';

export const state: ToDoState = {
  toDoItems: [],
};

export const toDoReducer = createReducer(
  initialState, 
  on(LoadToDO, (state) => {    
    return state.concat({value: '11'} as ToDoItem);
  }),
  on(CreateTarget, (state, {item}) => {
    console.log(item);
    return state.concat(item);    
  })
);
