import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritoComponent } from './favorito/favorito.component';

import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
