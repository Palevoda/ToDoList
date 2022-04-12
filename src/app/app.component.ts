import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Configurations } from './shared/enums/config';
import { ToDoItem } from './shared/models/todo-item';
import { StoreService } from './shared/services/store.service';
import { todoListSelector } from './store/actions/selectors/items-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDO';

  targetName: FormControl = new FormControl('');

  newItemNameInput: FormControl = new FormControl('');

  todoItems$: Observable<ToDoItem[]> = this.$store.pipe(
    select(todoListSelector)
  );

  constructor(
    private $store: Store<ToDoItem[]>,
    private storeService: StoreService
  ) {
    const storage = JSON.parse(
      localStorage.getItem(Configurations.LocalStorageName) || '{}'
    ) as ToDoItem[];
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
