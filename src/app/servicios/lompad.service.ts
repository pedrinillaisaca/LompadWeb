import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { HostListener } from '@angular/core';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})

@HostListener('window:beforeunload', ['$event'])

export class LompadService{    
  objPricipal$=new EventEmitter<any>();  
  objPricipal:any;
  objPrincipalXML$=new EventEmitter<any>();  
  objPrincipalXML:any;
  private hash:string;
  private perfil:string;
  private datosGenerales:any;
  
  constructor(
    private http:HttpClient,
    private api_service:ApiService,
    private router:Router, 
    // private toas:MessageService    
  ) {     
    this.pregarga();
    this.router.navigateByUrl("/");//Esto es necesario ya que cada vez que vayamos a actualizar debemos voler a la pagina de inicio
    

  }

  unloadHandler(event: Event) {
    // Your logic on beforeunload
    
    console.log("Saliendo app")
}

  pregarga(){//Usado cuando se desconecta el Frontend con el Blackend
    this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    if(this.datosGenerales !=null){
      console.log("tipo de dato;;;   ", typeof(this.datosGenerales));      
      this.perfil=this.datosGenerales['PERFIL'];
      this.hash=this.datosGenerales['HASHED_VALUE'];  
      console.log("perfl: ",this.perfil);
      console.log("hash; ",this.hash);  
      this.downloadXML_API(this.hash);
      this.getobject();
      // this.router.navigateByUrl("/paginas/general");//PROBOCA ERRORES
    }    
  }

  pregargaSimple(){//Usado cuando se sube un archivo por primera vez
    this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    if(this.datosGenerales !=null){          
      this.perfil=this.datosGenerales['PERFIL'];
      this.hash=this.datosGenerales['HASHED_VALUE'];  
      console.log("perfl: ",this.perfil);
      console.log("hash; ",this.hash); 
      this.downloadXML_API(this.hash);      
    }    
  }

  setObjson(param:any){  
    this.objPricipal=param;
    this.objPricipal$.emit(param);
    this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));
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
    this.api_service.send_ObjectApi(data,this.hash,hoja);//enviar solo el objeto y el has a actualizar                                    
    this.downloadXML_API(this.hash);//Actualiza el objecto cada vez que se guarde los cambiaos realiados
  }

//AREA DE DESCARGA
  downloadJSON(){
    const file=new Blob([this.objPricipal],{type:'application/json'});
    // const file=new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
    const url=window.URL.createObjectURL(file);
    new Blob([this.objPricipal], {type: 'application/json'});
    try {
      var FileSaver = require('file-saver');  
      var blob = new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
      FileSaver.saveAs(blob, "pedro.json");      
    } catch (error) {
      console.log("Error al Descargar JSON: ======>", error);
    }
   
  }


  downloadXML(){
  //  console.log("TIpo de dato:  ",typeof(this.objPrincipalXML));
    try {
      var FileSaver = require('file-saver');  
      var blob = new Blob([this.objPrincipalXML], {type: 'application/xml'});       
      FileSaver.saveAs(blob, "pedro.xml");
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
