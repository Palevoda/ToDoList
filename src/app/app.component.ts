import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { ToDoItem } from './models/item';
import { ToDoState } from './models/todo-state';
import { todoListSelector } from './selectors/items-selector';
import { StorageService } from './storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx';

  targetName: FormControl = new FormControl('');

  newItemNameInput: FormControl = new FormControl('');

  todoItems$: Observable<ToDoItem[]> = this.$store.pipe(
    select(todoListSelector)
  );

  constructor(
    private $store: Store<ToDoItem[]>,
    private storeService: StorageService
  ) {
    const storage = JSON.parse(
      localStorage.getItem('to-do-list') || '{}'
    ) as ToDoItem[];

    $store.pipe(select(todoListSelector)).subscribe((res) => {
      console.log(res);
    });
  }

  createTarget() {
    this.storeService.createTarget(this.targetName.value);
  }

  saveChanges(oldName: string) {
    this.storeService.changeTarget(oldName, this.newItemNameInput.value);
  }

  completeTarget(name: string) {
    this.storeService.completeTarget(name);
  }

  deleteItem(name: string) {
    this.storeService.deleteTarget(name);
  }
}
