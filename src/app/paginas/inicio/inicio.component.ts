import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LompadService } from 'src/app/servicios/lompad.service';
import { HttpClient } from '@angular/common/http';
import { AppMainComponent } from '../../app.main.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  objson: JSON;
  variable:any;
  mostrar:any;
  uploadedFiles: any[] = [];


  form: FormGroup;  
    
  

 constructor(
   public fb: FormBuilder,
   private http: HttpClient,     
   private lompadservice: LompadService,
   private appMain:AppMainComponent,
   private router:Router
   ) 
   {

    this.form = this.fb.group({
      file: [null]
    })
  
}


ngOnInit(): void {   
  // this.comprobacion();
  this.appMain.staticMenuActive=true;
}

comprobacion(){
  if (this.lompadservice.revLocal()!=null){
    this.lompadservice.getobject(); 
    this.appMain.staticMenuActive=true;
    this.router.navigateByUrl("/paginas/general");    
  }
}

onUpload(event) {    
  // const file = (event.target as HTMLInputElement).files[0];
  const file = event.files[0];
  this.form.patchValue({
    file: file
  });
  this.form.get('file').updateValueAndValidity()   
     
  var formData: any = new FormData();
  formData.append("file", this.form.get('file').value);
  this.lompadservice.setArchivo(formData);
  this.appMain.staticMenuActive=true;
  this.router.navigateByUrl("/paginas/general");
}

  upload(event) {
    console.log("subir evento")
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity()
 }



}

