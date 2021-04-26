import { Injectable } from '@angular/core';
import { Objson } from '../modelo/objson';

@Injectable({
  providedIn: 'root'
})
export class LompadService{
  public objson:any;

  constructor() { }

  getObjson(){
    return this.objson;  
  }

  setObjson(objsonp:any){
    this.objson=objsonp;
    console.log("el tipo de dato es : ",typeof this.objson)
  }
}
