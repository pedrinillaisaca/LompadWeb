import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParsedProperty, ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LompadService{
  public objson:any;
  public objPricipal:any;
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
    this.objson=objsonp;
    console.log("pedrooooo");
    console.log("el tipo de dato es : ",typeof this.objson);
    // this.hash=this.objson.HASHED_VALUE;
    // this.perfil=this.objson.PERFIL; 
    
    console.log("DATA : ",this.objson);    

  }


  getobject(){
    // aqui va imsss_3938403494820753430
    this.http.get('http://localhost:8000/private/read_file/?hashed_code=ims_-7417578143900555126&profile=IMS').subscribe(
    (response)=> console.log("Resp===>",response),
    (error)=> console.log("ERROR: ===>",error)      
    );
    console.log("PEDRO");
    console.log(this.objPricipal);
    // console.log("Esto se ejecutará antes que el console log de arriba");


    // this.http.post("http://localhost:8000/uploadfile", formData).subscribe(    
    // (response) => this.lompadservice.setObjson(response), //this.lompadservice.setObjson(response)
    // (error) => console.log(error)
    // )  
  }

  getObjectGeneral(){
    return this.objPricipal.general
  }
}
