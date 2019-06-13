import { Component, OnInit } from '@angular/core';
import { Teste } from '../teste.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
  projetos = new Teste();

  constructor() { 
    this.projetos.arquivo = "Projeto1";
  }

  ngOnInit() {
  }

}