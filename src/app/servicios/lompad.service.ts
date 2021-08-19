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

  pregarga(){
    this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
    if(this.datosGenerales !=null){
      console.log("tipo de dato;;;   ", typeof(this.datosGenerales));      
      this.perfil=this.datosGenerales['PERFIL'];
      this.hash=this.datosGenerales['HASHED_VALUE'];  
      console.log("perfl: ",this.perfil);
      console.log("hash; ",this.hash);      
      this.getobject();
      // this.router.navigateByUrl("/paginas/general");/7PROBOCA ERRORES
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

  // AREA DE ACTUALIZACION
  
  setObjectGeneral(obj:any) {
    console.log("setObjetGeneral: ")
    // this.objPricipal$['DATA']['general']=obj;
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

  


  
}
