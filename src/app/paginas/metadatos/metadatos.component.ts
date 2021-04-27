import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadatos',
  templateUrl: './metadatos.component.html',
  styleUrls: ['./metadatos.component.css']
})
export class MetadatosComponent implements OnInit {

  constructor() { }
  tipos:any[];
  ngOnInit(): void {
    this.tipos=[
      {label: 'Creador', value: {id: 1, name: 'Creador', code: 'cre'}},
      {label: 'Visor', value: {id: 2, name: 'Visor', code: 'vie'}}    
    ];
  }

}
