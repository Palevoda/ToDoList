import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoItem } from "../models/item";
import { ToDoState } from "../models/todo-state";

export const todoFeatureSelector = createFeatureSelector<ToDoItem[]>('todo-reducer');

  
export const todoListSelector = createSelector(
  todoFeatureSelector,
  (state) => state
);
