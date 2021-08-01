import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

@Component({
  selector: 'app-livecicle',
  templateUrl: './livecicle.component.html',
  styleUrls: ['./livecicle.component.css']
})
export class LivecicleComponent implements OnInit {
  tipos:any[];
  estados:any[];
  ObjOptions:ObjOptions=new ObjOptions();
  objLiveClicle:JSON;
  estado_LiveC:string;
  contrib_tipo:string;
  fecha:any

  constructor(
    private componentePrincipal: AppComponent,
    private lompadService:LompadService
    ) { }

  ngOnInit(): void {

    this.tipos=[
      {label: 'Autor', value:  '1', code: 'au'},
      {label: 'Revisor', value:  '2', code: 'rv'},
      {label: 'Desconocido', value:'3', code: 'des'},
      {label: 'iniciador', value: '4', code: 'in'},
      {label: 'terminador', value: '5', code: 'ter'},
      {label: 'editor', value: '6', code: 'ed'},
      {label: 'escritor', value:  '7', code: 'es'}
    ];

    this.estados=[
      {label: 'borrador', value:  '1', code: 'brr'},
      {label: 'final', value:  '2', code: 'fin'},
      {label: 'revisado', value:  '3', code: 'rev'},
      {label: 'no disponible', value:  '4', code: 'ndis'}
    ];

    this.ObjOptions=this.componentePrincipal.objOptions;
    this.objLiveClicle=this.lompadService.getOjbLifeCycle();
    console.log("desde ciclo de vida ",this.objLiveClicle);
    this.estado_LiveC=this.objLiveClicle["Status"];
    // this.contrib_tipo=this.objLiveClicle["Entity"]["Type"];
    this.fecha= new Date(this.objLiveClicle["Contribute"]["Date"]);
  }

  cambioEstadoLC(){
    console.log(this.estado_LiveC);
    this.objLiveClicle["Status"]=this.estado_LiveC;
  }
  cambio_contr_tipo(){
    // console.log(this.contrib_tipo);
    // this.objLiveClicle[]: PILAAASSSSS    
    console.log("daaatos:  ",this.fecha);
  }

}
