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
      this.lompadservice.objPricipal['DATA']['metaMetadata']=this.objMetadatos;
    }    
           
  ngOnInit(): void {
    this.loadDatos();
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


 
    cambioTipos(){
      console.log(this.tipos_Select)
      this.objMetadatos["Contribute"]["Role"]=this.tipos_Select;

    }



}
