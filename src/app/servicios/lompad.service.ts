import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class LompadService{    
  objPricipal$=new EventEmitter<any>();  
  objPricipal:any;
  private hash:string;
  private perfil:string;
  private datosGenerales:any;
  
  constructor(
    private http:HttpClient,
    private api_servive:ApiService,
    private router:Router,     
  ) {     
    this.pregarga();


  }

  pregarga(){//Usado cuando se desconecta el Frontend con el Blackend
    this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    if(this.datosGenerales !=null){
      console.log("tipo de dato;;;   ", typeof(this.datosGenerales));      
      this.perfil=this.datosGenerales['PERFIL'];
      this.hash=this.datosGenerales['HASHED_VALUE'];  
      console.log("perfl: ",this.perfil);
      console.log("hash; ",this.hash);      
      this.getobject();
      // this.router.navigateByUrl("/paginas/general");//PROBOCA ERRORES
    }    
  }

  pregargaSimple(){//Usado cuando se desconecta el Frontend con el Blackend
    this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    if(this.datosGenerales !=null){          
      this.perfil=this.datosGenerales['PERFIL'];
      this.hash=this.datosGenerales['HASHED_VALUE'];  
      console.log("perfl: ",this.perfil);
      console.log("hash; ",this.hash);                  
    }    
  }

  setObjson(param:any){  
    this.objPricipal=param;
    this.objPricipal$.emit(param);
    console.log('DATAAA : ',this.objPricipal);    
  }
  getobject(){     
    this.http.get('http://localhost:8000/private/read_file/?hashed_code='+this.hash+'&profile='+this.perfil).subscribe(  
    (response)=> this.setObjson(response),//console.log("Rsp===",response)
    (error)=> console.log("ERROR: ===>",error)      
    );              
  }

    

  setArchivo(data:any){
    console.log("Subiendo archivo...");    
    this.http.post("http://localhost:8000/uploadfile", data).subscribe(    
      (response) => {        
        localStorage.setItem("perfil_hash",JSON.stringify(response)); 
        this.perfil=response['PERFIL'];
        this.hash=response['HASHED_VALUE'];  
        console.log("perfl: ",this.perfil);
        console.log("hash; ",this.hash);
        this.getobject();
      }, 
      (error) => console.log(error)
    )  
    
      
  
  }


  revLocal(){
    return this.datosGenerales;
  }

  // AREA DE ACTUALIZACION

  saveObjectLompad(obj:any,hoja:string) {
    console.log("Guardando: => ",hoja)  
    var data=JSON.stringify(obj).toLocaleLowerCase();                     
    this.pregargaSimple();
    this.api_servive.send_ObjectApi(data,this.hash,hoja);//enviar solo el objeto y el has a actualizar                                    
  }

//AREA DE DESCARGA
  downloadJSON(){
    const file=new Blob([this.objPricipal],{type:'application/json'});
    // const file=new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
    // const url=window.URL.createObjectURL(file);
    // new Blob([this.objPricipal], {type: 'application/json'});
    var FileSaver = require('file-saver');    
    var blob = new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
    FileSaver.saveAs(blob, "pedro.json");
  }


  downloadXML(){
    const file=new Blob([this.objPricipal],{type:'application/json'});
    // const file=new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
    // const url=window.URL.createObjectURL(file);
    // new Blob([this.objPricipal], {type: 'application/json'});
    var FileSaver = require('file-saver');    
    var blob = new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
    FileSaver.saveAs(blob, "pedro.json");
  }




 
  
 

  


  
}
