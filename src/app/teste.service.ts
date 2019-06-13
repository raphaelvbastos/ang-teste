import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

export class Teste {
  arquivo: any;
}

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  url: string = "https://sistema-treinamentos.herokuapp.com/";
  // url: string = "http://localhost:8080/";

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(public http: HttpClient) { 
    
  }

  upload(t: FormData): Observable<any> {
    return this.http.post(this.url + "upload", t);
  } 
}
