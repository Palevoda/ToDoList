import { Action, createAction, props } from '@ngrx/store';
import { ToDoItem } from '../models/item';
import { ToDoState } from '../models/todo-state';

export const LoadToDO = createAction('[ToDo] Load');
export const CreateTarget = createAction(
  '[ToDo] Create target',
  props<{ item: ToDoItem }>()
);

export const CompleteItem = createAction('[ToDo] Complete');
export const DeleteItem = createAction('[ToDo] Delete');
