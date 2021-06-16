import { Component, OnInit, enableProdMode } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.component.html',
  styleUrls: ['./derechos.component.css']
})
export class DerechosComponent implements OnInit {
  decision:any[];
  ObjOptions:ObjOptions=new ObjOptions();
  constructor(private componentePrincipal: AppComponent ) { }
  
  ngOnInit(): void {
    this.decision=[
      {label: 'si', value: {id: 1, name: 'si', code: 'yes'}},
      {label: 'no', value: {id: 2, name: 'no', code: 'no'}}
    ];
    this.ObjOptions=this.componentePrincipal.objOptions;
  }

}
