import { Injectable } from '@angular/core';
import { Objson } from '../modelo/objson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
