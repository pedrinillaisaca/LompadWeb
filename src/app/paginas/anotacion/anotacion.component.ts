import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

@Component({
  selector: 'app-anotacion',
  templateUrl: './anotacion.component.html',
  styleUrls: ['./anotacion.component.css']
})
export class AnotacionComponent implements OnInit {
  ObjOptions:ObjOptions=new ObjOptions();
  modo_acceso:any[];
  modo_suficiente:any[];
  rol:any[];
  fecha:any;

  modo_accesoSelect:string;
  modo_suficienteSelect:string;
  rolSelect:string;

  nombreNew:string;
  apellidoNew:string;
  mailNew:string;
  organizacionNew:string;

  objAnotacion:any;
  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice: LompadService
  ) { }

  loadDatos(){
    this.objAnotacion=this.lompadservice.objPricipal['DATA']['annotation'];
  }      
  ngOnDestroy():void {
    console.log("Destroy ciclo de vida");    
    this.actualizarVcard(this.objAnotacion["Entity"]);
    this.objAnotacion["Date"]=this.fecha.toISOString();
    this.lompadservice.objPricipal['DATA']['annotation']=this.objAnotacion;
    this.lompadservice.saveObjectLompad(this.objAnotacion,"annotation");  
  }     
  ngOnInit(): void {
    this.loadDatos();
    this.castVcard(this.objAnotacion["Entity"]);
    this.ObjOptions=this.componentePrincipal.objOptions;
    this.modo_acceso=[
      {label: 'visual', value: 'visual', code: 'visu'},
      {label: 'auditivo', value:  'auditory', code: 'wartg'},
      {label: 'texto', value:  'tex', code: 'text'},
      {label: 'tactil', value: 'tactile', code: 'tac'}
    ];

    this.modo_suficiente=[
      {label: 'visual', value: 'visual', code: 'visu'},
      {label: 'auditivo', value:  'auditory', code: 'audi'},
      {label: 'texto', value:  'tex', code: 'text'},
      {label: 'tactil', value: 'tactile', code: 'tac'}
    ];

    this.rol=[
      {label: 'Estudiantes', value:  'student', code: 'est'},
      {label: 'Profesores', value:  'teachers', code: 'prof'},
      {label: 'Aplicación', value: 'application', code: 'app'}      
    ];
    
    this.modo_accesoSelect=this.objAnotacion["Mode Access"];
    this.modo_suficienteSelect=this.objAnotacion["Mode Access Sufficient"];
    this.rolSelect=this.objAnotacion["Rol"];
    this.fecha=new Date(this.objAnotacion["Date"]);    
    console.log("Desde Anotacion: ",this.objAnotacion);
    
  }

  castVcard(card:string){//lanzar desde ngOninit    
      var inicial=card;      
      inicial=inicial.replace(" ","_");
      inicial=inicial.replace(/ /g, "")
      var list=inicial.split("\n");
      // console.log(list);

      var varN=list[2].substring(2,list[2].length);
      var list_varN=varN.split(";")      
      var nombre=list_varN[1];
      var apellido=list_varN[0];

      var mail=list[4].split(":")[1];
      var organization=list[5].split(":")[1];

      console.log(nombre)
      console.log(apellido)
      console.log(mail)
      console.log(organization)

      this.nombreNew=nombre;
      
      this.apellidoNew=apellido
      
      this.mailNew=mail;
      
      this.organizacionNew=organization;
                  

  }

  actualizarVcard(card:string){//lanzar desde ngOnDestroy
    var carrd=card;
    carrd=carrd.replace(/ /g, "")
    var inicial=card;
      inicial=inicial.replace(" ","_");
      inicial=inicial.replace(/ /g, "")
      var list=inicial.split("\n");
      

      var varN=list[2].substring(2,list[2].length);
      var list_varN=varN.split(";")      
      var nombre=list_varN[1];
      var apellido=list_varN[0];

      var mail=list[4].split(":")[1];
      var organization=list[5].split(":")[1];
    
      carrd=carrd.replace(nombre,this.nombreNew.trim());
      carrd=carrd.replace(apellido,this.apellidoNew.trim());
      carrd=carrd.replace(mail,this.mailNew.trim());
      carrd=carrd.replace(organization,this.organizacionNew.trim());   
      const temFN=carrd.split("\n");
      temFN[3]="FN:"+this.nombreNew.trim()+" "+this.apellidoNew.trim();
      var final:string="";
      temFN.forEach(element => {
        final+=element+"\n";        
      });
      final=final.substring(0,final.length-1);
      console.log("fiNal card: ",final);
      this.objAnotacion["Entity"]=final;
  }



  cambio_modo_accesoSelect(){
    console.log(this.modo_accesoSelect);
    this.objAnotacion["Mode Access"]=this.modo_accesoSelect;
  }    

  cambio_modo_suficienteSelect(){
    console.log(this.modo_suficienteSelect);
    this.objAnotacion["Mode Access Sufficient"]=this.modo_suficienteSelect;
  }

  cambio_rolSelect(){
    console.log(this.rolSelect);
    this.objAnotacion["Rol"]=this.rolSelect; 
  }
    
     

}
