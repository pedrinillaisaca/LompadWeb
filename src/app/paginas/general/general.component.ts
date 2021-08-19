
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LompadService } from 'src/app/servicios/lompad.service';
import { ObjOptions } from '../../modelo/objOptions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, OnDestroy {
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
  ) {}

  loadDatos(){
   this.general_obj=this.lompadservice.objPricipal['DATA']['general'];
  }
  
 
  ngOnInit(): void { 
    this.loadDatos();
    this.estructuras=[
      {label: 'atómica', value: 'atomic', code: 'ato'},
      {label: 'colección', value: 'collection', code: 'coll'},
      {label: 'en red', value:  'networked', code: 'red'},
      {label: 'jerárquica', value: 'hiperarchical', code: 'je'},
      {label: 'lineal', value:  'linear', code: 'li'}
      
    ];
    
    this.nivelesAgregacion=[
      {label: '1', value: '1', code: '1'},
      {label: '2', value:  '2', code: '2'},
      {label: '3', value:  '3', code: '3'},
      {label: '4', value:  '4', code: '4'}
    ];
    this.columns = [];
    this.ObjOptions=this.componentePrincipal.objOptions;
    // this.lompadservice.getobject().subscribe(param=>{
    //   this.general_obj=param['DATA']['general'];
    //   console.log('PARAMETRO: ',param);
    // })
    // this.general_obj=this.lompadservice.getObjectGeneral();
    console.log("Desde General: ", this.general_obj);
    // PILAS CON ESTOS
    this.estructuraSelect=this.general_obj["Structure"];
    this.nivel_select=this.general_obj['Aggregation Level'];
    this.cargarkeywords(); 
  } 

 
  ngOnDestroy():void{    
    this.general_obj["Keyword"]=this.columns;  
    this.lompadservice.objPricipal['DATA']['general']=this.general_obj;    
    console.log("Destroy General");    
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
    this.general_obj["Aggregation Level"]=this.nivel_select;
  }


  public saveInfo(){ 
    
    // this.lompadservice.setObjectGeneral(this.general_obj);
    
  }


}
