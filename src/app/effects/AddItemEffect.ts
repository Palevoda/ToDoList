import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
@Injectable()
export class ToDoCrudEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService
  ) {}

  createEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[ToDo] Create target' as string),
        tap(() => this.storageService.saveState())
      ),
    { dispatch: false }
  );

  updateEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[ToDo] Update Item' as string),
        tap(() => this.storageService.saveState())
      ),
    { dispatch: false }
  );

  deleteEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[ToDo] Delete Item' as string),
        tap(() => this.storageService.saveState())
      ),
    { dispatch: false }
  );
}
