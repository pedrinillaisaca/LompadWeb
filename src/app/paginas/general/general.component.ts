
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
  general_obj:any;

  
  ObjOptions:ObjOptions=new ObjOptions();
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice: LompadService    
    ) {
     }

  ngOnInit(): void {    
    this.estructuras=[
      {label: 'atómica', value: {id: 1, name: 'atómica', code: 'ato'}},
      {label: 'colección', value: {id: 2, name: 'colección', code: 'coll'}},
      {label: 'en red', value: {id: 3, name: 'en red', code: 'red'}},
      {label: 'jerárquica', value: {id: 4, name: 'jerárquica', code: 'je'}},
      {label: 'lineal', value: {id: 5, name: 'lineal', code: 'li'}}
      
    ];
    
    this.nivelesAgregacion=[
      {label: '1', value: {id: 1, name: '1', code: '1'}},
      {label: '2', value: {id: 2, name: '2', code: '2'}},
      {label: '3', value: {id: 3, name: '3', code: '3'}},
      {label: '4', value: {id: 4, name: '4', code: '4'}}
    ];

    this.columns = [];


    this.ObjOptions=this.componentePrincipal.objOptions;

    this.general_obj=this.lompadservice.getObjectGeneral();
    console.log(this.general_obj);
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

}
