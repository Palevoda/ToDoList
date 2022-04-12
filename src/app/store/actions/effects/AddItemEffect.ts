import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { ToDoActions } from 'src/app/shared/enums/actions-enum';
import { StoreService } from 'src/app/shared/services/store.service';
@Injectable()
export class ToDoCrudEffects {
  constructor(
    private actions$: Actions,
    private storageService: StoreService
  ) {}

  createEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToDoActions.CreateTarget as string),
        tap(() => this.storageService.saveState())
      ),
    { dispatch: false }
  );

  updateEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToDoActions.UpdateTarget as string),
        tap(() => this.storageService.saveState())
      ),
    { dispatch: false }
  );

  deleteEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToDoActions.DeleteTarget as string),
        tap(() => this.storageService.saveState())
      ),
    { dispatch: false }
  );
}
