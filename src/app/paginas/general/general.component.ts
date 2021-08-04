
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LompadService } from 'src/app/servicios/lompad.service';
import { ObjOptions } from '../../modelo/objOptions';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  estructuras:any=[];
  nivelesAgregacion:any=[];
  columns:any[];
  palabra:string;  
  palabraDialog:boolean;  
  estructuraSelect:string;
  nivel_select:string;


  general_obj:any;
  

  
  ObjOptions:ObjOptions=new ObjOptions();
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice: LompadService    
    ) {

     }

  ngOnInit(): void {    
    this.estructuras=[
      {label: 'atómica', value: '1', code: 'ato'},
      {label: 'colección', value: '2', code: 'coll'},
      {label: 'en red', value:  '3', code: 'red'},
      {label: 'jerárquica', value: '4', code: 'je'},
      {label: 'lineal', value:  '5', code: 'li'}
      
    ];
    
    this.nivelesAgregacion=[
      {label: '1', value: '1', code: '1'},
      {label: '2', value:  '2', code: '2'},
      {label: '3', value:  '3', code: '3'},
      {label: '4', value:  '4', code: '4'}
    ];

    this.columns = [];


    this.ObjOptions=this.componentePrincipal.objOptions;

    this.general_obj=this.lompadservice.getObjectGeneral();    
    console.log("Desde General :  ",this.general_obj);

    // PILAS CON ESTOS
    this.estructuraSelect="2";
    this.nivel_select=this.general_obj['Aggregation Level'];

    this.cargarkeywords();
  }  
addPalabra() {
  this.palabraDialog=true;
  
}

cancelPalabra(){
  this.palabraDialog=false;
}

removeColumn() {
  this.columns.splice(-1, 1);
}

savePalabra(){
  console.log(this.palabra);
  this.palabraDialog=false;
  this.columns.push(this.palabra);
  this.palabra="";
  
}

cargarkeywords(){
  let keys:[]=this.general_obj["Keyword"];
  keys.forEach(element => {
    console.log("elementos ",element);
    this.columns.push(element);    
  });
}



cambioEstructura(){  
  console.log(this.estructuraSelect);
  this.general_obj["Structure"]=this.estructuraSelect;
}

cambio_nivel(){  
  console.log(this.nivel_select);
  this.general_obj["Aggregation Level"]=this.nivelesAgregacion;
}

}
