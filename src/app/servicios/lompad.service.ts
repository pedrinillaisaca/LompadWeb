import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Router } from '@angular/router';


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
    private router:Router    
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


 
  // saveOjbLifeCycle(obj:any){   
  // }
 
  // saveObjMetadata(obj:any){
  //   //return this.objPricipal["DATA"]["metaMetadata"];
  // }
 
  // saveObjTecnica(obj:any){
  //   //return this.objPricipal["DATA"]["technical"];  
  // }
 
  // saveUsoEducativo(obj:any){
  //   //return this.objPricipal["DATA"]["educational"];
  // }
 
  // saveDerechos(){
  //   //return this.objPricipal["DATA"]["rights"];  
  // }
 
  // saveRelacion(){
  //   //return this.objPricipal["DATA"]["relation"];
  // }
 
  // saveAnotacion(){
  //   //return this.objPricipal["DATA"]["annotation"];    
  // }
 
  // saveClasifiaction(){
  //   //return this.objPricipal["DATA"]["classification"];
  // }
 

  


  
}
