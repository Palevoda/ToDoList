import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './reducers/counter.reducer';
import { StorageService } from './storage/storage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoCrudEffects } from './effects/AddItemEffect';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({ 'todo-reducer': toDoReducer }),
    ReactiveFormsModule,
    EffectsModule.forRoot([ToDoCrudEffects]),
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [StorageService, StoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
