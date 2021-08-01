import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css']
})
export class TecnicaComponent implements OnInit {
  tiposOr:any[];
  objTecnica:any;
  req_tipo_select:string;

  ObjOptions:ObjOptions=new ObjOptions();
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice:LompadService
     ) { }
  

  ngOnInit(): void {

    this.tiposOr=[
      {label: 'Sistema Operativo', value:  'operating system', code: 'sys_o'},
      {label: 'Navegador', value:  'browser', code: 'nav'}    
    ];

    this.ObjOptions=this.componentePrincipal.objOptions;
    this.objTecnica=this.lompadservice.getObjTecnica();
    console.log("DEsde TEcnica: ",this.objTecnica);
    this.req_tipo_select=this.objTecnica['Requirement']['OrComposite']['Type'];
  }

}
