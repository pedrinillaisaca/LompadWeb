import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LompadService{  
  private objPricipal:JSON;
  private objPricipal$:Subject<JSON>

  private hash:string;
  private perfil:string;
  


  constructor(
    private http:HttpClient      
  ) { 
    this.objPricipal$=new Subject<JSON>();
    this.hash="aqui va imsss_-8916712447647505675";
    this.perfil="IMS";
  }

  onInit():void{
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA")
  }



  // Service message commands
  // callComponentMethod(value:any) {
  //   this.customSubject.next(value);
  // }


  setObjson(objsonp:any){
    this.objPricipal=objsonp; 
    // this.actualizacionGeneral();
    // this.objPricipal$=objsonp;  
    // console.log(this.objPricipal['DATA']['general']);
  }
   async getobject(){
    // aqui va imsss_3938403494820753430
    // this.http.get('http://localhost:8000/private/read_file/?hashed_code=ArchivoExportado_4602538962680866075&profile=SCORM').subscribe(
    this.http.get('http://localhost:8000/private/read_file/?hashed_code=ArchivoExportado_-4735151486683075299&profile=SCORM').subscribe(  
    (response)=> this.setObjson(response)    ,//console.log("Rsp===",response)
    (error)=> console.log("ERROR: ===>",error)      
    );         
    // this.http.post("http://localhost:8000/uploadfile", formData).subscribe(    
    // (response) => this.lompadservice.setObjson(response), //this.lompadservice.setObjson(response)
    // (error) => console.log(error)
    // )  
  }

  getObjectPrincipal$(): Observable<JSON>{
    return this.objPricipal$.asObservable();
  }

  getObjectGeneral() {
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


  // AREA DE ACTUALIZACION
  
  setObjectGeneral(obj:any) {
    console.log("setObjetGeneral")
    this.objPricipal['DATA']['general']=obj;
    this.objPricipal$.next(this.objPricipal);
  }

  setOjbLifeCycle(obj:any){
    this.objPricipal["DATA"]["lifeCycle"]=obj;
    this.objPricipal$.next(this.objPricipal);
  }

  setObjMetadata(obj:any){
    this.objPricipal["DATA"]["metaMetadata"]=obj;
    this.objPricipal$.next(this.objPricipal);
  }

  setObjTecnica(obj:any){
    this.objPricipal["DATA"]["technical"]=obj;  
    this.objPricipal$.next(this.objPricipal);
  }

  setUsoEducativo(obj:any){
    this.objPricipal["DATA"]["educational"]=obj;
    this.objPricipal$.next(this.objPricipal);
  }

  setDerechos(obj:any){
    this.objPricipal["DATA"]["rights"]=obj;  
    this.objPricipal$.next(this.objPricipal);
  }

  setRelacion(obj:any){
    this.objPricipal["DATA"]["relation"]=obj;
    this.objPricipal$.next(this.objPricipal);
  }

  setAnotacion(obj:any){
    this.objPricipal["DATA"]["annotation"]=obj;    
    this.objPricipal$.next(this.objPricipal);
  }

  setClasifiaction(obj:any){
    this.objPricipal["DATA"]["classification"]=obj;
    this.objPricipal$.next(this.objPricipal);
  }

  actualizacionGeneral(){    
    this.objPricipal$.next(this.objPricipal);
    console.log("actualizaion Obj GENeral; ",this.objPricipal$);
  }

  


  
}
