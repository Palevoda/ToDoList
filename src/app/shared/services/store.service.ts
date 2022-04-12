import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  CreateTarget,
  DeleteTarget,
  LoadToDO,
  UpdateTarget,
} from 'src/app/store/actions/actions/todo.actions';
import { todoListSelector } from 'src/app/store/actions/selectors/items-selector';
import { Configurations } from '../enums/config';
import { ToDoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private $store: Store<ToDoItem[]>) {
    this.$store.dispatch(LoadToDO());
  }

  saveState() {
    this.$store
      .pipe(select(todoListSelector))
      .subscribe((state: ToDoItem[]) => {
        localStorage.setItem(
          Configurations.LocalStorageName,
          JSON.stringify(state)
        );
      });
  }

  createTarget(targetName: string) {
    const item: ToDoItem = {
      value: targetName,
      isCompleted: false,
    };
    this.$store.dispatch(CreateTarget({ item }));
  }

  changeTarget(name: string, newName: string) {
    this.$store
      .pipe(select(todoListSelector))
      .subscribe((items: ToDoItem[]) => {
        const target = items.find((item) => item.value === name);

        if (target) {
          const changedTarget = {
            value: newName,
            isCompleted: target.isCompleted,
          } as ToDoItem;

          changedTarget.value = newName;
          this.$store.dispatch(UpdateTarget({ name, changedTarget }));
        }
      });
  }

  completeTarget(name: string) {
    const changedTarget = {
      value: name,
      isCompleted: true,
    } as ToDoItem;

    this.$store.dispatch(UpdateTarget({ name, changedTarget }));
  }

  deleteTarget(name: string) {
    this.$store.dispatch(DeleteTarget({ name }));
  }
}
