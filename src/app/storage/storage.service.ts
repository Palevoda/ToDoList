import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  CreateTarget,
  DeleteItem,
  LoadToDO,
  UpdateItem,
} from '../actions/counter.actions';
import { ToDoItem } from '../models/item';
import { ToDoState } from '../models/todo-state';
import { todoListSelector } from '../selectors/items-selector';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  state: ToDoItem[] = [
    {
      value: 'item1',
      isCompleted: false,
    },
    {
      value: 'item11',
      isCompleted: false,
    },
    {
      value: 'item111',
      isCompleted: false,
    },
  ];
  constructor(private $store: Store<ToDoItem[]>) {
    // localStorage.setItem('to-do-list', JSON.stringify(this.state));

    const storage = JSON.parse(
      localStorage.getItem('to-do-list') || '{}'
    ) as ToDoItem[];

    if (storage) {
      this.$store.dispatch(LoadToDO());
    }
  }

  saveState() {
    this.$store
      .pipe(select(todoListSelector))
      .subscribe((state: ToDoItem[]) => {
        localStorage.setItem('to-do-list', JSON.stringify(state));
        console.log('state saved');
      });
  }

  createTarget(targetName: string) {
    console.log(targetName);

    const item: ToDoItem = {
      value: targetName,
      isCompleted: false,
    };

    console.log(item);

    this.$store.dispatch(CreateTarget({ item }));
  }

  changeTarget(name: string, newName: string) {
    console.log(name + ' ' + newName);
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
          this.$store.dispatch(UpdateItem({ name, changedTarget }));
        }
      });
  }

  completeTarget(name: string) {
    const changedTarget = {
      value: name,
      isCompleted: true,
    } as ToDoItem;

    this.$store.dispatch(UpdateItem({ name, changedTarget }));
  }

  deleteTarget(name: string) {
    this.$store.dispatch(DeleteItem({ name }));
  }
}
