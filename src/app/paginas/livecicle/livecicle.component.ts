import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';
import { VCard } from 'ngx-vcard';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-livecicle',
  templateUrl: './livecicle.component.html',
  styleUrls: ['./livecicle.component.css']
})
export class LivecicleComponent implements OnInit {
  tipos:any[];
  estados:any[];
  estadoSelect:string;
  tiposSelect:string;  
  
  ObjOptions:ObjOptions=new ObjOptions();
  objLiveClicle:JSON;
  
  fecha:any

  vCard:VCard = {
    name: {
      firstNames: "John",
      lastNames: "Doe",
    },    
    organization:"ssstrn",       
  };
  
  

  constructor(
    private componentePrincipal: AppComponent,
    private lompadService:LompadService,
    @Inject(LOCALE_ID) private locale: string
    ) {
      this.tipos=[
        {label: 'Autor', value:  'author', code: 'au'},
        {label: 'Revisor', value:  'validator', code: 'rv'},
        {label: 'Desconocido', value:'unknown', code: 'des'},
        {label: 'iniciador', value: 'initiator', code: 'in'},
        {label: 'terminador', value: 'terminator', code: 'ter'},
        {label: 'editor', value: 'publisher', code: 'ed'},
        {label: 'escritor', value:  'editor', code: '324'},
        {label: 'diseñador grafico', value:  'graphical designer', code: '324'},
        {label: 'desarrollador técnico', value:  'technical implementer', code: '345'},
        {label: 'proveedor de contenido', value:  'content provider', code: '645'},
        {label: 'revisor técnico', value:  'technical validator', code: '6654'},
        {label: 'revisor educativo', value:  'educational validator', code: '6654'},
        {label: 'guionista', value:  'script writer', code: '54'},
        {label: 'diseñador educativo', value:  'instructional designer', code: '76'},
        {label: 'experto en la materia', value:  'subject matter expert', code: '57'},
      ];
  
      this.estados=[
        {label: 'borrador', value:  'draft', code: 'brr'},
        {label: 'final', value:  'final', code: 'fin'},
        {label: 'revisado', value:  'revised', code: 'rev'},
        {label: 'no disponible', value:  'unavailable', code: 'ndis'}
      ];
  
      this.ObjOptions=this.componentePrincipal.objOptions;
      this.objLiveClicle=this.lompadService.getOjbLifeCycle();
      console.log("desde ciclo de vida ",this.objLiveClicle);
      this.estadoSelect=this.objLiveClicle["Status"];
      this.tiposSelect=this.objLiveClicle["Contribute"]["Role"];
      this.fecha= new Date(this.objLiveClicle["Contribute"]["Date"]);
  
      // var inicial=this.objLiveClicle["Contribute"]["Entity"];
      // inicial.trim();
      // var nombre=inicial.split("\n")[2].split(";")[0];
      // var apellido=inicial.split("\n")[2].split(";")[1];
      // var organization=inicial.split("\n")[5];        
         
      // console.log("nom: ",nombre.substring(2,nombre.length));
      // console.log("nom: ",apellido);
      // console.log("nom: ",organization.substring(4,organization.length));
  
      // this.vCard.name.firstNames=nombre.substring(2,nombre.length);
      // this.vCard.name.lastNames=apellido;
      // this.vCard.organization=organization.substring(4,organization.length);
      
      this.startTimer();

     }

  ngOnInit(): void {

    
  }

  cambioEstados(){
    console.log(this.estadoSelect);
    this.objLiveClicle["Status"]=this.estadoSelect;
  }
  cambio_contr_tipo(){
    console.log(this.tiposSelect);
    this.objLiveClicle["Contribute"]["Role"]=this.tiposSelect;
  }



  saveInfo(){                        
    this.lompadService.setOjbLifeCycle(this.objLiveClicle);     
  }


  timeLeft: number = 60;
  interval;

  startTimer() {
      this.interval = setInterval(() => {          
          this.saveInfo();
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 60;
        }
      },2000)
    }   
    
	
	

}
