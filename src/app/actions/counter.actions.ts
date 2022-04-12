import { createAction, props } from '@ngrx/store';
import { ToDoItem } from '../models/item';

export const LoadToDO = createAction('[ToDo] Load');
export const CreateTarget = createAction(
  '[ToDo] Create target',
  props<{ item: ToDoItem }>()
);
export const UpdateItem = createAction(
  '[ToDo] Update Item',
  props<{ name: string; changedTarget: ToDoItem }>()
);
export const DeleteItem = createAction(
  '[ToDo] Delete Item',
  props<{ name: string }>()
);
export const CompleteItem = createAction(
  '[ToDo] Complete Item',
  props<{ name: string }>()
);
