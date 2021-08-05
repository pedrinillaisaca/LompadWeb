import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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
      {label: 'es referenciado por', value:  'is referenced by', code: 't234'},
      {label: 'se basa en', value:  'is based on', code: 't234'},
      {label: 'es base para', value:  'is basis for', code: 't234'},
      {label: 'requiere', value:  'requires', code: 't234'},
      {label: 'es requerido por', value:  'is required by', code: 't234'}
    ];
    this.ObjOptions=this.componentePrincipal.objOptions;
    this.objRelacion=this.lompadservice.getRelacion();
    this.tiposSelect=this.objRelacion["Kind"];
    this.startTimer();
  }

  timeLeft: number = 60;
  interval;
  startTimer() {
      this.interval = setInterval(() => {          
          this.saveInfo();
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 60;
        }
      },2000)
    }   
  
  cambio_tiposSelect(){
    console.log(this.tiposSelect);    
    this.objRelacion["Kind"]=this.tiposSelect;
  }
  saveInfo(){
    this.lompadservice.setRelacion(this.objRelacion);
  }

}
