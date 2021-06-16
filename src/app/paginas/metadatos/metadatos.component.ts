import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';

@Component({
  selector: 'app-metadatos',
  templateUrl: './metadatos.component.html',
  styleUrls: ['./metadatos.component.css']
})
export class MetadatosComponent implements OnInit {
  tipos:any[];
  ObjOptions:ObjOptions=new ObjOptions();
  constructor(private componentePrincipal: AppComponent ) { }
  
  ngOnInit(): void {
    this.tipos=[
      {label: 'Creador', value: {id: 1, name: 'Creador', code: 'cre'}},
      {label: 'Visor', value: {id: 2, name: 'Visor', code: 'vie'}}    
    ];


    this.ObjOptions=this.componentePrincipal.objOptions;
  }

}
