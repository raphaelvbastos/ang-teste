import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritoComponent } from './favorito/favorito.component';

import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
