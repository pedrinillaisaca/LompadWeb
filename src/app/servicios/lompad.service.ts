import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { saveAs } from 'file-saver';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class LompadService{    
  objPricipal$=new EventEmitter<any>();  
  objPricipal:JSON;
  objPrincipalXML$=new EventEmitter<any>();  
  objPrincipalXML:any;
  private hash:string;
  private perfil:string;
  perfil$=new EventEmitter<any>();
  private datosGenerales:any;
  
  constructor(
    private http:HttpClient,
    private api_service:ApiService,
    private cookieService:CookieService
    // private toas:MessageService    
  ) {     
    this.precarga();    
    
  }


  precarga(){//Usado cuando se desconecta el Frontend con el Blackend

    // this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    // localStorage.removeItem('perfil_hash');
    // this.cookieService.deleteAll();

    this.objPricipal=JSON.parse(localStorage.getItem('objPrincipal'));    
    if(this.objPricipal !=undefined){    //PILAS       
      this.perfil=this.cookieService.get('perfil');
      this.hash=this.cookieService.get('hash');
      console.log("perfl: ",this.perfil);
      console.log("hash; ",this.hash);
      // ESTO NO HACE NADA AL MOMENTO DE RECARGAR LA PAGINA
      // this.objPricipal$.emit(this.objPricipal);
      // this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));              
      console.log("DATA: TYPE: ",(this.objPricipal));                    
    }    

  }



  // PILAS CON EL FORMATO
  precargaSimple(response:any){//Usado cuando se sube un archivo por primera vez
    this.cookieService.set('perfil',response['PERFIL']);
    this.cookieService.set('hash',response['HASHED_VALUE']);    
    this.perfil=this.cookieService.get('perfil');
    this.hash=this.cookieService.get('hash');
    console.log("perfl: ",this.perfil);
    console.log("hash; ",this.hash);                        
    this.getobject();        
    this.downloadXML_API(this.hash);    
  }

  getPerfil(){
   return this.perfil;
  }

  // setObjson(param:any){  
  //   this.objPricipal=param;
  //   this.objPricipal$.emit(param);
  //   this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));                      
  // }

  mapReload(param:JSON){
    this.objPricipal=param;
    localStorage.setItem('objPrincipal',JSON.stringify(this.objPricipal));
    this.objPricipal$.emit(this.objPricipal);
    this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));   
    this.perfil$.emit(this.perfil);
    console.log("DATA: TYPE: ",typeof(this.objPricipal));  
  }

  async getobject(){  
                    
    const response= await fetch("http://localhost:8000/private/read_file/?hashed_code="+this.hash+"&profile="+this.perfil, {
      method: 'GET',
      redirect: 'follow'
    });
    
    if(response.ok){
      const obj= await response.json();      
      this.mapReload(obj);
     
    }else{
      console.log("Error LOMPAD linea 101");
    } 

  }

  getObject1():Observable<any>{
    return this.http.get<any>("http://localhost:8000/private/read_file/?hashed_code="+this.hash+"&profile="+this.perfil);
  }
    
  setArchivo(data:any){
    console.log("Subiendo archivo...");    
    this.http.post("http://localhost:8000/uploadfile", data).subscribe(    
      (response) => this.precargaSimple(response), 
      (error) => console.log(error)
    )              
  }

  // revLocal(){
  //   return this.datosGenerales;
  // }

  // AREA DE ACTUALIZACION

  saveObjectLompad(obj:any,hoja:string) {
    localStorage.setItem('objPrincipal',JSON.stringify(this.objPricipal));
    console.log("Guardando: => ",hoja)  
    // var data=JSON.stringify(obj).toLocaleLowerCase(); 
    // var pedro=JSON.parse(JSON.stringify(this.objPricipal).replace(/\s(?=\w+":)/g, ""));  
          
    var data=JSON.parse(JSON.stringify(obj).replace(/\s(?=\w+":)/g, ""));     
    data=JSON.stringify(data).toLocaleLowerCase(); 
    console.log("Enviando.... ",data, "Hoja: ",hoja);
    // this.precargaSimple();
    this.api_service.send_ObjectApi(data,this.hash,hoja);//enviar solo el objeto y el has a actualizar                                    
    this.downloadXML_API(this.hash);//Actualiza el objecto cada vez que se guarde los cambiaos realiados
  }

//AREA DE DESCARGA
  downloadJSON(){
    var pedro=JSON.parse(JSON.stringify(this.objPricipal).replace(/\s(?=\w+":)/g, ""));
    // const file=new Blob([pedro],{type:'application/json'});
    // // const file=new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
    // const url=window.URL.createObjectURL(file);
    // new Blob([pedro], {type: 'application/json'});
    try {
      // var FileSaver = require('file-saver');  
      var blob = new Blob([JSON.stringify(pedro, null, 2)], {type: 'application/json'});    
      saveAs(blob, "ArchivoExportado.json");      
    } catch (error) {
      console.log("Error al Descargar JSON: ======>", error);
    }
   
  }

  downloadXML(){
  //  console.log("TIpo de dato:  ",typeof(this.objPrincipalXML));
    try {
      // var FileSaver = require('file-saver');  
      var blob = new Blob([this.objPrincipalXML], {type: 'application/xml'});       
      saveAs(blob, "ArchivoExportado.xml");
    } catch (error) {
      console.log("Error al Descargar XML: ======>", error);
    }          
   
  }

  downloadXML_API(hash_param:string){       
    
    fetch("http://localhost:8000/private/download/?hashed_code="+hash_param, {
    // fetch("http://localhost:8000/private/download/?hashed_code=ArchivoExportado_-6482018054697832733",{
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        this.objPrincipalXML=result
        this.objPrincipalXML$.emit(this.objPrincipalXML)
      })
      .catch(error => console.log('error', error));        
  }

  exitApp(){
    console.log("saLIENDO APP#################33")
  }



 
  
 

  


  
}
