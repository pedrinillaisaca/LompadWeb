import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LompadService{
  public objson:any;
  public objPricipal:JSON;
  private hash:string;
  private perfil:string;
  

  constructor(
    private http:HttpClient      
  ) { 
    this.hash="aqui va imsss_-8916712447647505675";
    this.perfil="IMS";
  }
  
         

  getObjson(){
    return this.objson;  
  }

  setObjson(objsonp:any){
    this.objPricipal=objsonp;  
    // console.log(this.objPricipal['DATA']['general']);
  }


   async getobject(){
    // aqui va imsss_3938403494820753430
    this.http.get('http://localhost:8000/private/read_file/?hashed_code=ArchivoExportado_-4735151486683075299&profile=SCORM').subscribe(
    (response)=> this.setObjson(response)    ,//console.log("Rsp===",response)
    (error)=> console.log("ERROR: ===>",error)      
    );         
    // this.http.post("http://localhost:8000/uploadfile", formData).subscribe(    
    // (response) => this.lompadservice.setObjson(response), //this.lompadservice.setObjson(response)
    // (error) => console.log(error)
    // )  
  }

  getObjectGeneral(){
    return this.objPricipal['DATA']['general'];
  }

  getOjbLifeCycle(){
    return  this.objPricipal["DATA"]["lifeCycle"];
  }

  getObjMetadata(){
    return this.objPricipal["DATA"]["metaMetadata"];
  }

  getObjTecnica(){
    return this.objPricipal["DATA"]["technical"];  
  }

  getUsoEducativo(){
    return this.objPricipal["DATA"]["educational"];
  }

  getDerechos(){
    return this.objPricipal["DATA"]["rights"];  
  }

  getRelacion(){
    return this.objPricipal["DATA"]["relation"];
  }

  getAnotacion(){
    return this.objPricipal["DATA"]["annotation"];    
  }

  getClasifiaction(){
    return this.objPricipal["DATA"]["classification"];
  }
  
}
