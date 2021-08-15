import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppMainComponent } from '../app.main.component';





@Injectable({
  providedIn: 'root'
})
export class LompadService{    
  objPricipal$=new EventEmitter<JSON>();  
  private hash:string;
  private perfil:string;
  private datosGenerales:any;
  


  constructor(
    private http:HttpClient,
    private api_servive:ApiService,
    // private appMain:AppMainComponent   
  ) {     
    this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    console.log("PREGARGA...  ",this.datosGenerales);
    this.perfil=this.datosGenerales['PERFIL'];
    this.hash=this.datosGenerales['HASHED_VALUE'];
  }



  // Service message commands
  // callComponentMethod(value:any) {
  //   this.customSubject.next(value);
  // }


  setObjson(objsonp:any){
    this.objPricipal$.emit(objsonp);
    console.log('DATAAA');
    console.log(this.objPricipal$);
  }
   async getobject(){    
    this.http.get('http://localhost:8000/private/read_file/?hashed_code='+this.hash+'&profile='+this.perfil).subscribe(  
    (response)=> this.setObjson(response)    ,//console.log("Rsp===",response)
    (error)=> console.log("ERROR: ===>",error)      
    );             
  }

  // getObjectPrincipal$(): Observable<JSON>{
  //   return this.objPricipal$.asObservable();
    
  // }

  // getObjectGeneral() {
  //   return this.objPricipal['DATA']['general'];  
  // }

  // getOjbLifeCycle(){
  //   return  this.objPricipal["DATA"]["lifeCycle"];
  // }

  // getObjMetadata(){
  //   return this.objPricipal["DATA"]["metaMetadata"];
  // }

  // getObjTecnica(){
  //   return this.objPricipal["DATA"]["technical"];  
  // }

  // getUsoEducativo(){
  //   return this.objPricipal["DATA"]["educational"];
  // }

  // getDerechos(){
  //   return this.objPricipal["DATA"]["rights"];  
  // }

  // getRelacion(){
  //   return this.objPricipal["DATA"]["relation"];
  // }

  // getAnotacion(){
  //   return this.objPricipal["DATA"]["annotation"];    
  // }

  // getClasifiaction(){
  //   return this.objPricipal["DATA"]["classification"];
  // }


  // URL_UPLOAD_FILE: `${API_BACKEND}/uploadfile`,
  // URL_READ_FILE: `${API_BACKEND}/private/read_file`,
  // URL_UPDATE_FILE:`${API_BACKEND}/private/update`,
  // URL_DOWNLOAD:`${API_BACKEND}/private_download`,

  // AREA DE ACTUALIZACION
  
  setObjectGeneral(obj:any) {
    console.log("setObjetGeneral: ")
    // this.objPricipal['DATA']['general']=obj;
    // this.actualizacionGeneral();
    var data=JSON.stringify(obj).toLocaleLowerCase();    
    // console.log("DATA: ",data);

    
      console.log("ejecutando API");
      this.api_servive.send_ObjectGeneral(data,'ArchivoExportado_-3762513805627016048','general')                
    
        
    // var request = require('request');
    // var options = {
    //   'method': 'POST',
    //   'url': 'http://localhost:8000/private/update/?hashed_code=ArchivoExportado_-3762513805627016048&hoja=general&data={"identifier":{"catalog":"PEDRO","entry":"ILLAISACA"},"title":"titutlo del general","language": "es","description": "descripcion del general.","keyword":["key1","key2"],"coverage":"ambitogeneral","structure":"atomic","aggregation level": "2"}',
    //   'headers': {
    //   }
    // };
    // request(options, function (error, response) {
    //   if (error) throw new Error(error);
    //   console.log("BIen!!!!!",response.body);
    // });
    
    
  }

  // setOjbLifeCycle(obj:any){
  //   this.objPricipal["DATA"]["lifeCycle"]=obj;
  //   this.actualizacionGeneral();
  // }

  // setObjMetadata(obj:any){
  //   this.objPricipal["DATA"]["metaMetadata"]=obj;
  //   this.actualizacionGeneral();
  // }

  // setObjTecnica(obj:any){
  //   this.objPricipal["DATA"]["technical"]=obj;  
  //   this.actualizacionGeneral();
  // }

  // setUsoEducativo(obj:any){
  //   this.objPricipal["DATA"]["educational"]=obj;
  //   this.actualizacionGeneral();
  // }

  // setDerechos(obj:any){
  //   this.objPricipal["DATA"]["rights"]=obj;  
  //   this.actualizacionGeneral();
  // }

  // setRelacion(obj:any){
  //   this.objPricipal["DATA"]["relation"]=obj;
  //   this.actualizacionGeneral();
  // }

  // setAnotacion(obj:any){
  //   this.objPricipal["DATA"]["annotation"]=obj;    
  //   this.actualizacionGeneral();
  // }

  // setClasifiaction(obj:any){
  //   this.objPricipal["DATA"]["classification"]=obj;
  //   this.actualizacionGeneral();
  // }

  // actualizacionGeneral(){    
  //   this.objPricipal$.next(this.objPricipal);
  //   // console.log("actualizaion Obj GENeral; ",this.objPricipal$);
  // }


  setArchivo(data:any){
    console.log("Subiendo archivo...");

    this.http.post("http://localhost:8000/uploadfile", data).subscribe(    
      (response) => {
        console.log("RESponse:  ",response);
        localStorage.setItem("perfil_hash",JSON.stringify(response)); 
        this.perfil=response['PERFIL'];
        this.hash=response['HASHED_VALUE'];                 

      }, 
      (error) => console.log(error)
    )  
    console.log("submit2");
    

  // this.lompadservice.getobject();
  
  }


  revLocal(){
    return this.datosGenerales;
  }

  


  
}
