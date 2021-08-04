import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

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
  fecha:any;

  modo_accesoSelect:string;
  modo_suficienteSelect:string;
  rolSelect:string;

  objAnotacion:any;
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice: LompadService
    ) { }

  ngOnInit(): void {
    this.ObjOptions=this.componentePrincipal.objOptions;
    this.modo_acceso=[
      {label: 'visual', value: 'visual', code: 'visu'},
      {label: 'auditivo', value:  'auditory', code: 'wartg'},
      {label: 'texto', value:  'tex', code: 'text'},
      {label: 'tactil', value: 'tactile', code: 'tac'}
    ];

    this.modo_suficiente=[
      {label: 'visual', value: 'visual', code: 'visu'},
      {label: 'auditivo', value:  'auditory', code: 'audi'},
      {label: 'texto', value:  'tex', code: 'text'},
      {label: 'tactil', value: 'tactile', code: 'tac'}
    ];

    this.rol=[
      {label: 'Estudiantes', value:  'student', code: 'est'},
      {label: 'Profesores', value:  'teachers', code: 'prof'},
      {label: 'Aplicación', value: 'application', code: 'app'}      
    ];
    this.objAnotacion=this.lompadservice.getAnotacion();
    this.modo_accesoSelect=this.objAnotacion["Mode Access"];
    this.modo_suficienteSelect=this.objAnotacion["Mode Access Sufficient"];
    this.rolSelect=this.objAnotacion["Rol"];
    this.fecha=new Date(this.objAnotacion["Date"]);    
    console.log("Desde Anotacion: ",this.modo_accesoSelect);

  }

}
