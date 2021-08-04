import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

@Component({
  selector: 'app-relacion',
  templateUrl: './relacion.component.html',
  styleUrls: ['./relacion.component.css']
})
export class RelacionComponent implements OnInit {
  ObjOptions:ObjOptions=new ObjOptions();
  objRelacion:any;
  tipos:any[];
  tiposSelect:string;

  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice:LompadService
    ) { }


  ngOnInit(): void {
    this.tipos=[
      {label: 'es parte de', value: 'ispartof', code: 's_p_d'},
      {label: 'tiene parte', value:  'haspart', code: 't_p'},
      {label: 'es versión de', value:  'isversionof', code: 'e_v_d'},
      {label: 'tiene versión', value: 'hasversion', code: 't_v'},
      {label: 'es formato de', value: 'isformatof', code: 'e_f_d'},
      {label: 'tiene formato', value:  'hasformat', code: 't_f'},
      {label: 'referencia', value:  'references', code: 't234'}
    ];
    this.ObjOptions=this.componentePrincipal.objOptions;
    this.objRelacion=this.lompadservice.getRelacion();
    this.tiposSelect=this.objRelacion["Kind"];
  }

}
