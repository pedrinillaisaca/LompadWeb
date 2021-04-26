import { Component, OnInit } from '@angular/core';
import { Objson } from 'src/app/modelo/objson';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-viewjson',
  templateUrl: './viewjson.component.html',
  styleUrls: ['./viewjson.component.css']
})
export class ViewjsonComponent implements OnInit {
  public objson:Objson;
  constructor(private apiservice: ApiService) { }  
  ngOnInit(): void {
    this.apiservice.getObjson().subscribe(objson => (this.objson=objson));
  }

}
