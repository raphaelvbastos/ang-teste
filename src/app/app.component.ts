import { Component, OnInit } from '@angular/core';
import { TesteService, Teste } from './teste.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {

  }

  teste: Teste = new Teste();
  uploadedFiles: Array < File >;
  cont: Array<any>;
  constructor(public ts: TesteService, public router: Router) {

  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    console.log(this.uploadedFiles);
    let formData = new FormData();
    this.cont = new Array();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.cont.push(this.uploadedFiles[i].name);
      formData.append("nome", "AAAAAA");
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }

    console.log(formData.get("uploads[]"));

    this.ts.upload(formData).subscribe(
          (dados) => {
            this.router.navigate(["/favorito"]);
          }
        );
  }

  // upload() {
  //   this.ts.upload(this.teste).subscribe(
  //     (dados) => {
  //       this.router.navigate(["/"]);
  //     }
  //   );
  // }
}

