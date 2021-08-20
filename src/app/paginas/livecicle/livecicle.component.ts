import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-livecicle',
  templateUrl: './livecicle.component.html',
  styleUrls: ['./livecicle.component.css']
})
export class LivecicleComponent implements OnInit, OnDestroy {
  tipos:any[];
  estados:any[];
  estadoSelect:string;
  tiposSelect:string;  
  nombreNew:string;
  apellidoNew:string;
  mailNew:string;
  organizacionNew:string;
    
      
  ObjOptions:ObjOptions=new ObjOptions();
  objprincipal:any;
  objLiveClicle:any;  
  fecha:Date

  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice:LompadService    
  ) {}

  loadDatos(){
    this.objLiveClicle=this.lompadservice.objPricipal['DATA']['lifeCycle'];
  }
     
  ngOnInit():void  {         
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

    this.objprincipal=this.lompadservice.objPricipal['DATA']['lifeCycle'];

    this.loadDatos();
    console.log("desde ciclo de vida ",this.objLiveClicle);
    this.estadoSelect=this.objLiveClicle["Status"];
    this.tiposSelect=this.objLiveClicle["Contribute"]["Role"];
    this.fecha= new Date(this.objLiveClicle["Contribute"]["Date"]);        
    this.castVcard(this.objLiveClicle["Contribute"]["Entity"]);
            
  }

//   getFormatedDate(date: Date, format: string) {    
//     const datePipe = new DatePipe('en-US');
//     return datePipe.transform(date, format);
// }

  ngOnDestroy():void {
    console.log("Destroy ciclo de vida"); 
    this.actualizarVcard(this.objLiveClicle["Contribute"]["Entity"]);                       
    this.objLiveClicle["Contribute"]["Date"]=this.fecha.toISOString();
    this.lompadservice.objPricipal['DATA']['lifeCycle']=this.objLiveClicle;
    this.lompadservice.saveObjectLompad(this.objLiveClicle,"lifeCycle");  
  }


  castVcard(card:string){//lanzar desde ngOninit    
      var inicial=card;
      inicial=inicial.replace(" ","_");
      var list=inicial.split("\n");
      // console.log(list);

      var varN=list[2].substring(2,list[2].length);
      var list_varN=varN.split(";")      
      var nombre=list_varN[1];
      var apellido=list_varN[0];

      var mail=list[4].split(":")[1];
      var organization=list[5].split(":")[1];

      console.log(nombre)
      console.log(apellido)
      console.log(mail)
      console.log(organization)

      this.nombreNew=nombre;
      
      this.apellidoNew=apellido
      
      this.mailNew=mail;
      
      this.organizacionNew=organization;
                   

  }

  actualizarVcard(card:string){//lanzar desde ngOnDestroy
    var carrd=card;
    var inicial=card;
      inicial=inicial.replace(" ","_");
      var list=inicial.split("\n");
      

      var varN=list[2].substring(2,list[2].length);
      var list_varN=varN.split(";")      
      var nombre=list_varN[1];
      var apellido=list_varN[0];

      var mail=list[4].split(":")[1];
      var organization=list[5].split(":")[1];
    
      carrd=carrd.replace(nombre,this.nombreNew.trim());
      carrd=carrd.replace(apellido,this.apellidoNew.trim());
      carrd=carrd.replace(mail,this.mailNew.trim());
      carrd=carrd.replace(organization,this.organizacionNew.trim());   
      const temFN=carrd.split("\n");
      temFN[3]="FN:"+this.nombreNew.trim()+" "+this.apellidoNew.trim();
      var final:string="";
      temFN.forEach(element => {
        final+=element+"\n";        
      });
      final=final.substring(0,final.length-1);
      console.log("fiNal card: ",final);
      this.objLiveClicle["Contribute"]["Entity"]=final;
  }

  

  cambioEstados(){
    console.log(this.estadoSelect);
    this.objLiveClicle["Status"]=this.estadoSelect;
  }
  cambio_contr_tipo(){
    console.log(this.tiposSelect);
    this.objLiveClicle["Contribute"]["Role"]=this.tiposSelect;
  }



  // saveInfo(){            
  
  //   this.lompadService.setOjbLifeCycle(this.objLiveClicle);     
  // }


  
    
	
	

}
