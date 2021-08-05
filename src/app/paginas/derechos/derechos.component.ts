import { Component, OnInit, enableProdMode } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.component.html',
  styleUrls: ['./derechos.component.css']
})
export class DerechosComponent implements OnInit {
  decision:any[];
  coste:any[];
  decisionSelect:string;
  costeSelect:string;
  objderechos:any;
  
  ObjOptions:ObjOptions=new ObjOptions();
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice:LompadService
     ) { }
  
  ngOnInit(): void {
    this.decision=[
      {label: 'si', value: 'yes', code: 'yes'},
      {label: 'no', value: 'no', code: 'no'}
    ];
    this.coste=[
      {label: 'si', value: 'yes', code: 'yes'},
      {label: 'no', value: 'no', code: 'no'}
    ];
    this.objderechos=this.lompadservice.getDerechos();
    console.log("DEsde Derechos: ",this.objderechos);
    this.ObjOptions=this.componentePrincipal.objOptions;
    this.costeSelect=this.objderechos['Cost'];
    this.decisionSelect=this.objderechos['Copyright and Other Restrictions']; 
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
    
  cambio_costeSelect(){
    console.log(this.costeSelect);
    this.objderechos['Cost']=this.costeSelect;
  }

  cambio_decisionSelect(){
    console.log(this.decisionSelect);
    this.objderechos['Copyright and Other Restrictions']=this.decisionSelect;    
  }
    
    
  saveInfo(){
    this.lompadservice.setDerechos(this.objderechos);
  }

}
