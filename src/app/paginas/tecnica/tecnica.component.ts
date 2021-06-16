import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css']
})
export class TecnicaComponent implements OnInit {
  tiposOr:any[];

  ObjOptions:ObjOptions=new ObjOptions();
  constructor(private componentePrincipal: AppComponent ) { }
  

  ngOnInit(): void {

    this.tiposOr=[
      {label: 'Sistema Operativo', value: {id: 1, name: 'Sistema Operativo', code: 'sys_o'}},
      {label: 'Navegador', value: {id: 2, name: 'Navegador', code: 'nav'}}    
    ];

    this.ObjOptions=this.componentePrincipal.objOptions;
  }

}
