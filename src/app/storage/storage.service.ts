import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { CreateTarget, LoadToDO} from '../actions/counter.actions';
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
    }
  ];
  constructor(private $store: Store<ToDoItem[]>) {

    localStorage.setItem('to-do-list', JSON.stringify(this.state));

    const storage = JSON.parse(
      localStorage.getItem('to-do-list') || '{}'
    ) as ToDoItem[];

    if (storage) {
      this.$store.dispatch(LoadToDO());
    }
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
}
