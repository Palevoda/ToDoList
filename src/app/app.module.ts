import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './reducers/counter.reducer';
import { StorageService } from './storage/storage.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({ 'todo-reducer': toDoReducer }),
    ReactiveFormsModule,
  ],
  providers: [StorageService, StoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
