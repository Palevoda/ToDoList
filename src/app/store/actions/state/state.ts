import { Configurations } from 'src/app/shared/enums/config';
import { ToDoItem } from 'src/app/shared/models/todo-item';

export const initialState: ToDoItem[] = JSON.parse(
  localStorage.getItem(Configurations.LocalStorageName) || '{}'
) as ToDoItem[];
