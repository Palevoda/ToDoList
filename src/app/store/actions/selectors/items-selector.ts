import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReducerNames } from 'src/app/shared/enums/reducer-names';
import { ToDoItem } from 'src/app/shared/models/todo-item';

export const todoFeatureSelector = createFeatureSelector<ToDoItem[]>(
  ReducerNames.ToDoReducer
);

export const todoListSelector = createSelector(
  todoFeatureSelector,
  (state) => state
);
