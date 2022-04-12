import { State } from '@ngrx/store';
import { ToDoItem } from './item';

export interface ToDoState {
  toDoItems: ToDoItem[];
}

export const initialState: ToDoItem[] = JSON.parse(
  localStorage.getItem('to-do-list') || '{}'
) as ToDoItem[];