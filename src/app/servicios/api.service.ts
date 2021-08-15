import { Injectable } from '@angular/core';
import { Objson } from '../modelo/objson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private objson: any = { value: "", icon_url: "", id: "", url: "" };
  private ChuckUrl = "https://api.chucknorris.io/jokes/random"; // URL to web api  


  constructor(private http:HttpClient) { }

  public getObjson(): Observable<Objson> {
    return this.http.get<Objson>(this.ChuckUrl);
  }

  send_ObjectGeneral(obj:any,hascode:string,hoja:string){
    // console.log("URL===>  ",environment.URL_UPDATE_FILE+'/?hashed_code='+hascode+'&hoja='+hoja+'&data='+obj);
    // var url=environment.URL_UPDATE_FILE+'/?hashed_code='+hascode+'&hoja='+hoja+'&data='+obj;
    // console.log("tipo:   =>",typeof(url));
    var raw = "";

    fetch("http://localhost:8000/private/update/?hashed_code=ArchivoExportado_-3762513805627016048&hoja=general&data="+obj, {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log("RESULTADO: ",result))
      .catch(error => console.log('error', error));
    
  }

  send_OjbLifeCycle(obj:any){
 
  }

  send_ObjMetadata(obj:any){
    
  }

  send_ObjTecnica(obj:any){
    
  }

  send_UsoEducativo(obj:any){
    
  }

  send_Derechos(obj:any){
    
  }

  send_Relacion(obj:any){

  }

  send_Anotacion(obj:any){

  }

  send_Clasifiaction(obj:any){

  }

    

}
