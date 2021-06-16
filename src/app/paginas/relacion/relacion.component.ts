import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';

@Component({
  selector: 'app-relacion',
  templateUrl: './relacion.component.html',
  styleUrls: ['./relacion.component.css']
})
export class RelacionComponent implements OnInit {
  ObjOptions:ObjOptions=new ObjOptions();
  constructor(private componentePrincipal: AppComponent) { }
  tipos:any[];

  ngOnInit(): void {
    this.tipos=[
      {label: 'es parte de', value: {id: 1, name: 'es parte de', code: 's_p_d'}},
      {label: 'tiene parte', value: {id: 2, name: 'tiene parte', code: 't_p'}},
      {label: 'es versión de', value: {id: 3, name: 'es version de', code: 'e_v_d'}},
      {label: 'tiene versión', value: {id: 4, name: 'tiene versión', code: 't_v'}},
      {label: 'es formato de', value: {id: 5, name: 'es formato de', code: 'e_f_d'}},
      {label: 'tiene formato', value: {id: 6, name: 'tiene formato', code: 't_f'}}
    ];
    this.ObjOptions=this.componentePrincipal.objOptions;
  }

}
