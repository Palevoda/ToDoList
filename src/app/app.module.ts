import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './store/actions/reducers/counter.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoCrudEffects } from './store/actions/effects/AddItemEffect';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreService } from './shared/services/store.service';

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
  providers: [StoreService, StoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
