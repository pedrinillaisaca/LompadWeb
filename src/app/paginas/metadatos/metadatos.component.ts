import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-metadatos',
  templateUrl: './metadatos.component.html',
  styleUrls: ['./metadatos.component.css']
})
export class MetadatosComponent implements OnInit {
  objMetadatos:JSON;  
  subcripcion:Subscription
  tipos:any[];
  tipos_Select:string;  
  ObjOptions:ObjOptions=new ObjOptions();
  nombreNew:string;
  apellidoNew:string;
  mailNew:string;
  organizacionNew:string;  
  fecha:any;
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice: LompadService
    ) { }
    
  
    loadDatos(){
      this.objMetadatos=this.lompadservice.objPricipal['DATA']['metaMetadata'];
    }          
    ngOnDestroy():void {      
      console.log("Destroy Metadatos"); 
      this.actualizarVcard(this.objMetadatos['Contribute']['Entity']);
      this.objMetadatos['Contribute']['Date']=this.fecha.toISOString();
      this.lompadservice.objPricipal['DATA']['metaMetadata']=this.objMetadatos;
      this.lompadservice.saveObjectLompad(this.objMetadatos,"metaMetadata");  
    }    
           
  ngOnInit(): void {
    this.loadDatos();
    this.castVcard(this.objMetadatos['Contribute']['Entity']);
    this.tipos=[
      {label: 'Creador', value: 'creator', code: 'cre'},
      {label: 'Visor', value: 'validator', code: 'vie'}   
    ];

    this.ObjOptions=this.componentePrincipal.objOptions;
    // this.objMetadatos=this.lomapdService.getObjMetadata();

    console.log("Desde metadatos: ",this.objMetadatos);
    this.fecha=new Date(this.objMetadatos["Contribute"]["Date"])
    this.tipos_Select=this.objMetadatos["Contribute"]["Role"]

    
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
    this.objMetadatos["Contribute"]["Entity"]=final;
}  


 
    cambioTipos(){
      console.log(this.tipos_Select)
      this.objMetadatos["Contribute"]["Role"]=this.tipos_Select;

    }



}
