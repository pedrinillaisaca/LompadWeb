import { EventEmitter, Injectable } from '@angular/core';
import { ObjOptions } from '../modelo/objOptions';

@Injectable({
  providedIn: 'root'
})
export class ObjetoGeneralService {

  public objOptions:ObjOptions=new ObjOptions();
  objOptions$=new EventEmitter<ObjOptions>();  

  constructor() {
    this.loadObject();
   }

  loadObject(){
    this.formatScorm();
    this.objOptions$.emit(this.objOptions);
  }

  public cambioPerfil(event){  
          
    if (event.value.name === "IEEE LOM"){            
        this.formatIEEE();
        this.objOptions$.emit(this.objOptions);
    }
    else if(event.value.name === "CanCore"){
        this.formatCanCore();
        this.objOptions$.emit(this.objOptions);
    }
    else if(event.value.name === "LMRI"){
        this.formatLMRI();
        this.objOptions$.emit(this.objOptions);
    }
    else if(event.value.name === "SCORM"){
        this.formatScorm();
        this.objOptions$.emit(this.objOptions);
    }

}

formatIEEE(){
        
  console.log("formateando IEEE");
  this.objOptions.o1=true;        
  this.objOptions.o1_1=true;
  this.objOptions.o1_2=true;
  this.objOptions.o1_3=true;
  this.objOptions.o1_4=true;
  this.objOptions.o1_5=true;
  this.objOptions.o1_6=true;
  this.objOptions.o1_7=true;
  this.objOptions.o1_8=true;

  this.objOptions.o2=true;
  this.objOptions.o2_1=true;
  this.objOptions.o2_2=true;
  this.objOptions.o2_3=true;
  this.objOptions.o2_3_1=true;
  this.objOptions.o2_3_2=true;
  this.objOptions.o2_3_3=true;


  this.objOptions.o3=true;
  this.objOptions.o3_1=true;

  this.objOptions.o3_2=true;
  this.objOptions.o3_2_1=true;
  this.objOptions.o3_2_2=true;
  this.objOptions.o3_2_3=true;

  this.objOptions.o3_3=true;
  this.objOptions.o3_4=true;



  this.objOptions.o4=true;
  this.objOptions.o4_1=true;
  this.objOptions.o4_2=true;
  this.objOptions.o4_3=true;
  this.objOptions.o4_4=true;
  this.objOptions.o4_4_1=true;
  this.objOptions.o4_5=true;
  this.objOptions.o4_6=true;
  this.objOptions.o4_7=true;

  this.objOptions.o5=true;
  this.objOptions.o5_1=true;
  this.objOptions.o5_2=true;
  this.objOptions.o5_3=true;
  this.objOptions.o5_4=true;
  this.objOptions.o5_5=true;
  this.objOptions.o5_6=true;
  this.objOptions.o5_7=true;
  this.objOptions.o5_8=true;
  this.objOptions.o5_9=true;
  this.objOptions.o5_10=true;
  this.objOptions.o5_11=true;



  this.objOptions.o6=true;
  this.objOptions.o6_1=true;
  this.objOptions.o6_2=true;
  this.objOptions.o6_3=true;

  this.objOptions.o7=true;
  this.objOptions.o7_1=true;
  this.objOptions.o7_2=true;
  this.objOptions.o7_2_1=true;
  this.objOptions.o7_2_2=true;

  this.objOptions.o8=true;
  this.objOptions.o8_1=true;
  this.objOptions.o8_2=true;
  this.objOptions.o8_3=true;
  this.objOptions.o8_4=true;
  this.objOptions.o8_5=true;
  this.objOptions.o8_6=true;

  this.objOptions.o9=true;
  this.objOptions.o9_1=true;
  this.objOptions.o9_2=true;
  this.objOptions.o9_2_1=true;
  this.objOptions.o9_2_2=true;
  this.objOptions.o9_3=true;
  this.objOptions.o9_4=true;

  this.objOptions.o10=true;

}

formatCanCore(){
  console.log("formateando CanCore");
  this.objOptions.o1=true;        
  this.objOptions.o1_1=true;
  this.objOptions.o1_2=true;
  this.objOptions.o1_3=true;
  this.objOptions.o1_4=true;
  this.objOptions.o1_5=true;
  this.objOptions.o1_6=false;
  this.objOptions.o1_7=false;
  this.objOptions.o1_8=true;

  this.objOptions.o2=true;
  this.objOptions.o2_1=true;
  this.objOptions.o2_2=false;
  this.objOptions.o2_3=true;
  this.objOptions.o2_3_1=true;
  this.objOptions.o2_3_2=true;
  this.objOptions.o2_3_3=true;


  this.objOptions.o3=true;
  this.objOptions.o3_1=true;

  this.objOptions.o3_2=true;
  this.objOptions.o3_2_1=true;
  this.objOptions.o3_2_2=true;
  this.objOptions.o3_2_3=true;

  this.objOptions.o3_3=true;
  this.objOptions.o3_4=true;



  this.objOptions.o4=true;
  this.objOptions.o4_1=true;
  this.objOptions.o4_2=true;
  this.objOptions.o4_3=true;
  this.objOptions.o4_4=false;
  this.objOptions.o4_4_1=false;
  this.objOptions.o4_5=false;
  this.objOptions.o4_6=true;
  this.objOptions.o4_7=true;

  this.objOptions.o5=true;
  this.objOptions.o5_1=false;
  this.objOptions.o5_2=true;
  this.objOptions.o5_3=true;
  this.objOptions.o5_4=false;
  this.objOptions.o5_5=true;
  this.objOptions.o5_6=true;
  this.objOptions.o5_7=true;
  this.objOptions.o5_8=false;
  this.objOptions.o5_9=true;
  this.objOptions.o5_10=false;
  this.objOptions.o5_11=true;



  this.objOptions.o6=true;
  this.objOptions.o6_1=true;
  this.objOptions.o6_2=true;
  this.objOptions.o6_3=true;

  this.objOptions.o7=true;
  this.objOptions.o7_1=true;
  this.objOptions.o7_2=true;
  this.objOptions.o7_2_1=true;
  this.objOptions.o7_2_2=false;

  this.objOptions.o8=true;
  this.objOptions.o8_1=true;
  this.objOptions.o8_2=true;
  this.objOptions.o8_3=true;
  this.objOptions.o8_4=false;
  this.objOptions.o8_5=false;
  this.objOptions.o8_6=true;

  this.objOptions.o9=true;
  this.objOptions.o9_1=true;
  this.objOptions.o9_2=true;
  this.objOptions.o9_2_1=true;
  this.objOptions.o9_2_2=true;
  this.objOptions.o9_3=false;
  this.objOptions.o9_4=true;

  this.objOptions.o10=false;

}

formatLMRI(){
  console.log("formateando LMRI");
  this.objOptions.o1=true;        
  this.objOptions.o1_1=true;
  this.objOptions.o1_2=true;
  this.objOptions.o1_3=false;
  this.objOptions.o1_4=true;
  this.objOptions.o1_5=true;
  this.objOptions.o1_6=false;
  this.objOptions.o1_7=false;
  this.objOptions.o1_8=false;

  this.objOptions.o2=true;
  this.objOptions.o2_1=true;
  this.objOptions.o2_2=false;
  this.objOptions.o2_3=true;
  this.objOptions.o2_3_1=true;
  this.objOptions.o2_3_2=true;
  this.objOptions.o2_3_3=true;


  this.objOptions.o3=false;
  this.objOptions.o3_1=false;

  this.objOptions.o3_2=false;
  this.objOptions.o3_2_1=false;
  this.objOptions.o3_2_2=false;
  this.objOptions.o3_2_3=false;

  this.objOptions.o3_3=false;
  this.objOptions.o3_4=false;



  this.objOptions.o4=true;
  this.objOptions.o4_1=false;
  this.objOptions.o4_2=false;
  this.objOptions.o4_3=true;
  this.objOptions.o4_4=false;
  this.objOptions.o4_4_1=false;
  this.objOptions.o4_5=false;
  this.objOptions.o4_6=false;
  this.objOptions.o4_7=true;

  this.objOptions.o5=true;
  this.objOptions.o5_1=true;
  this.objOptions.o5_2=true;
  this.objOptions.o5_3=true;
  this.objOptions.o5_4=false;
  this.objOptions.o5_5=true;
  this.objOptions.o5_6=true;
  this.objOptions.o5_7=true;
  this.objOptions.o5_8=false;
  this.objOptions.o5_9=true;
  this.objOptions.o5_10=false;
  this.objOptions.o5_11=true;



  this.objOptions.o6=true;
  this.objOptions.o6_1=false;
  this.objOptions.o6_2=true;
  this.objOptions.o6_3=true;

  this.objOptions.o7=true;
  this.objOptions.o7_1=true;
  this.objOptions.o7_2=true;
  this.objOptions.o7_2_1=true;
  this.objOptions.o7_2_2=true;

  this.objOptions.o8=true;
  this.objOptions.o8_1=false;
  this.objOptions.o8_2=false;
  this.objOptions.o8_3=false;
  this.objOptions.o8_4=false;
  this.objOptions.o8_5=true;
  this.objOptions.o8_6=true;

  this.objOptions.o9=true;
  this.objOptions.o9_1=true;
  this.objOptions.o9_2=false;
  this.objOptions.o9_2_1=false;
  this.objOptions.o9_2_2=false;
  this.objOptions.o9_3=true;
  this.objOptions.o9_4=true;

  this.objOptions.o10=true;

}

formatScorm(){
  console.log("formateando scorm");
  this.objOptions.o1=true;        
  this.objOptions.o1_1=true;
  this.objOptions.o1_2=true;
  this.objOptions.o1_3=false;
  this.objOptions.o1_4=true;
  this.objOptions.o1_5=true;
  this.objOptions.o1_6=false;
  this.objOptions.o1_7=false;
  this.objOptions.o1_8=false;

  this.objOptions.o2=true;
  this.objOptions.o2_1=true;
  this.objOptions.o2_2=true;
  this.objOptions.o2_3=false;
  this.objOptions.o2_3_1=false;
  this.objOptions.o2_3_2=false;
  this.objOptions.o2_3_3=false;


  this.objOptions.o3=true;
  this.objOptions.o3_1=true;

  this.objOptions.o3_2=false;
  this.objOptions.o3_2_1=false;
  this.objOptions.o3_2_2=false;
  this.objOptions.o3_2_3=false;

  this.objOptions.o3_3=true;
  this.objOptions.o3_4=false;



  this.objOptions.o4=true;
  this.objOptions.o4_1=true;
  this.objOptions.o4_2=false;
  this.objOptions.o4_3=false;
  this.objOptions.o4_4=false;
  this.objOptions.o4_4_1=false;
  this.objOptions.o4_5=false;
  this.objOptions.o4_6=false;
  this.objOptions.o4_7=false;

  this.objOptions.o5=false;
  this.objOptions.o5_1=false;
  this.objOptions.o5_2=false;
  this.objOptions.o5_3=false;
  this.objOptions.o5_4=false;
  this.objOptions.o5_5=false;
  this.objOptions.o5_6=false;
  this.objOptions.o5_7=false;
  this.objOptions.o5_8=false;
  this.objOptions.o5_9=false;
  this.objOptions.o5_10=false;
  this.objOptions.o5_11=false;



  this.objOptions.o6=true;
  this.objOptions.o6_1=true;
  this.objOptions.o6_2=true;
  this.objOptions.o6_3=false;

  this.objOptions.o7=false;
  this.objOptions.o7_1=false;
  this.objOptions.o7_2=false;
  this.objOptions.o7_2_1=false;
  this.objOptions.o7_2_2=false;

  this.objOptions.o8=false;
  this.objOptions.o8_1=false;
  this.objOptions.o8_2=false;
  this.objOptions.o8_3=false;
  this.objOptions.o8_4=false;
  this.objOptions.o8_5=false;
  this.objOptions.o8_6=false;

  this.objOptions.o9=false;
  this.objOptions.o9_1=false;
  this.objOptions.o9_2=false;
  this.objOptions.o9_2_1=false;
  this.objOptions.o9_2_2=false;
  this.objOptions.o9_3=false;
  this.objOptions.o9_4=false;

  this.objOptions.o10=false;

}
  
}
