import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';

@Component({
  selector: 'app-anotacion',
  templateUrl: './anotacion.component.html',
  styleUrls: ['./anotacion.component.css']
})
export class AnotacionComponent implements OnInit {
  ObjOptions:ObjOptions=new ObjOptions();
  modo_acceso:any[];
  modo_suficiente:any[];
  rol:any[];
  constructor(private componentePrincipal: AppComponent ) { }

  ngOnInit(): void {
    this.ObjOptions=this.componentePrincipal.objOptions;
    this.modo_acceso=[
      {label: 'visual', value: {id: 1, name: 'si', code: 'visu'}},
      {label: 'auditivo', value: {id: 2, name: 'no', code: 'audi'}},
      {label: 'texto', value: {id: 3, name: 'no', code: 'text'}},
      {label: 'tactil', value: {id: 4, name: 'no', code: 'tac'}}
    ];


    this.modo_suficiente=[
      {label: 'visual', value: {id: 1, name: 'si', code: 'visu'}},
      {label: 'auditivo', value: {id: 2, name: 'no', code: 'audi'}},
      {label: 'texto', value: {id: 3, name: 'no', code: 'text'}},
      {label: 'tactil', value: {id: 4, name: 'no', code: 'tac'}}
    ];

    this.rol=[
      {label: 'Estudiantes', value: {id: 1, name: 'estudiantes', code: 'est'}},
      {label: 'Profesores', value: {id: 2, name: 'profesores', code: 'prof'}},
      {label: 'Aplicación', value: {id: 3, name: 'aplcacion', code: 'app'}}      
    ];



  }

}
