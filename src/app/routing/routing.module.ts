import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from "@angular/router";
import { FavoritoComponent } from '../favorito/favorito.component';
import { AppComponent } from '../app.component';

const rotas: Routes = [
  {path: "favorito", component: FavoritoComponent},
  {path: "", component: AppComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class RoutingModule { }
