import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livecicle',
  templateUrl: './livecicle.component.html',
  styleUrls: ['./livecicle.component.css']
})
export class LivecicleComponent implements OnInit {
  tipos:any[];
  estados:any[];
  constructor() { }

  ngOnInit(): void {

    this.tipos=[
      {label: 'Autor', value: {id: 1, name: 'Autor', code: 'au'}},
      {label: 'Revisor', value: {id: 2, name: 'Revisor', code: 'rv'}},
      {label: 'Desconocido', value: {id: 3, name: 'Desconocido', code: 'des'}},
      {label: 'iniciador', value: {id: 4, name: 'iniciador', code: 'in'}},
      {label: 'terminador', value: {id: 5, name: 'terminador', code: 'ter'}},
      {label: 'editor', value: {id: 5, name: 'editor', code: 'ed'}},
      {label: 'escritor', value: {id: 5, name: 'escritor', code: 'es'}}
    ];

    this.estados=[
      {label: 'borrador', value: {id: 1, name: 'borrador', code: 'brr'}},
      {label: 'final', value: {id: 2, name: 'final', code: 'fin'}},
      {label: 'revisado', value: {id: 3, name: 'revisado', code: 'rev'}},
      {label: 'no disponible', value: {id: 4, name: 'no disponible', code: 'ndis'}}      
    ];
  }

}
