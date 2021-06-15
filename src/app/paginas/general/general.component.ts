
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
