import { createAction, props } from '@ngrx/store';
import { ToDoActions } from 'src/app/shared/enums/actions-enum';
import { ToDoItem } from 'src/app/shared/models/todo-item';

export const LoadToDO = createAction(ToDoActions.LoadTarget);
export const CreateTarget = createAction(
  ToDoActions.CreateTarget,
  props<{ item: ToDoItem }>()
);
export const UpdateTarget = createAction(
  ToDoActions.UpdateTarget,
  props<{ name: string; changedTarget: ToDoItem }>()
);
export const DeleteTarget = createAction(
  ToDoActions.DeleteTarget,
  props<{ name: string }>()
);
export const CompleteTarget = createAction(
  ToDoActions.CompleteTarget,
  props<{ name: string }>()
);
