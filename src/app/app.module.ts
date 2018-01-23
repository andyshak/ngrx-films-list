import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmListComponent } from './components/film-list/film-list.component';

import { reducers, metaReducers } from './store/reducers';
import { FilmSelectedComponent } from './components/film-selected/film-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    FilmListComponent,
    FilmSelectedComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
