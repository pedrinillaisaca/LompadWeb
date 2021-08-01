import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

@Component({
  selector: 'app-metadatos',
  templateUrl: './metadatos.component.html',
  styleUrls: ['./metadatos.component.css']
})
export class MetadatosComponent implements OnInit {
  objMetadatos:JSON;
  tipos:any[];
  tipos_Select:string;  
  ObjOptions:ObjOptions=new ObjOptions();
  fecha:any;
  constructor(
    private componentePrincipal: AppComponent,
    private lomapdService: LompadService
    ) { }
  
  ngOnInit(): void {
    this.tipos=[
      {label: 'Creador', value: 'creator', code: 'cre'},
      {label: 'Visor', value: 'validator', code: 'vie'}   
    ];


    this.ObjOptions=this.componentePrincipal.objOptions;
    this.objMetadatos=this.lomapdService.getObjMetadata();
    console.log("Desde metadatos: ",this.objMetadatos);
    this.fecha=new Date(this.objMetadatos["Contribute"]["Date"])
    this.tipos_Select=this.objMetadatos["Contribute"]["Role"]
  }

}
