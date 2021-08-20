import { Injectable } from '@angular/core';
import { Objson } from '../modelo/objson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private objson: any = { value: "", icon_url: "", id: "", url: "" };
  


  constructor(private http:HttpClient) { }


  send_ObjectApi(obj:any,hascode:string,hoja:string){
    var raw = "";
    console.log("PILAS CON EL api");
    // console.log("http://localhost:8000/private/update/?hashed_code="+hascode+"&hoja="+hoja+"&data="+obj);
    // console.log("=========================================");
        
    // fetch("http://localhost:8000/private/update/?hashed_code="+hascode+"&hoja="+hoja+"&data="+obj, {
    //   method: 'POST',
    //   body: raw,
    //   redirect: 'follow'
    // })
    //   .then(response => response.text())
    //   .then(result => console.log("RESULTADO: ",result))
    //   .catch(error => console.log('error', error));    
  }

  // send_OjbLifeCycle(obj:any){
 
  // }

  // send_ObjMetadata(obj:any){
    
  // }

  // send_ObjTecnica(obj:any){
    
  // }

  // send_UsoEducativo(obj:any){
    
  // }

  // send_Derechos(obj:any){
    
  // }

  // send_Relacion(obj:any){

  // }

  // send_Anotacion(obj:any){

  // }

  // send_Clasifiaction(obj:any){

  // }

    

}
