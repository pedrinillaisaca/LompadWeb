import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LompadService } from 'src/app/servicios/lompad.service';
import { HttpClient } from '@angular/common/http';
import { AppMainComponent } from '../../app.main.component';


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
  API: "http://172.16.210.80:8000/uploadfile";
    
  

 constructor(
   public fb: FormBuilder,
   private http: HttpClient,     
   private lompadservice: LompadService,
   private appMain:AppMainComponent
   ) 
   {

    this.form = this.fb.group({
      file: [null]
    })
  
}


ngOnInit(): void {   
    this.submit();
}



onUpload(event) {    
  // const file = (event.target as HTMLInputElement).files[0];
  const file = event.files[0];
  this.form.patchValue({
    file: file
  });
  this.form.get('file').updateValueAndValidity()   
   
  
}

  upload(event) {
    console.log("subir evento")
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity()
 }

 submit() {
  console.log("Pulsando Submit");
  // var formData: any = new FormData();
  // formData.append("file", this.form.get('file').value);
  // this.http.post("http://localhost:8000/uploadfile", formData).subscribe(    
  //   (response) => this.lompadservice.setObjson(response), //this.lompadservice.setObjson(response)
  //   (error) => console.log(error)
  // )  
  console.log("submit2");
  this.appMain.staticMenuActive=true;
  //AQUI TENGO QUE CONFIGUAR LA COOKIE PARA GUARDAR LOS DATOS DEL HASH DE CONEXION 

  this.lompadservice.getobject();
}

}

