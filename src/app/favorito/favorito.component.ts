import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
  projetos = new Object();

  constructor() { 
    this.projetos = {
      nome: "Projeto1"
    }
  }

  ngOnInit() {
  }

}
