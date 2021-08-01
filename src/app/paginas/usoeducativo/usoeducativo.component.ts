import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ObjOptions } from 'src/app/modelo/objOptions';
import { LompadService } from '../../servicios/lompad.service';

@Component({
  selector: 'app-usoeducativo',
  templateUrl: './usoeducativo.component.html',
  styleUrls: ['./usoeducativo.component.css']
})
export class UsoeducativoComponent implements OnInit {

  
  ObjOptions:ObjOptions=new ObjOptions();
  tiposActividad:any[];
  tiposRecursEducativos:any[];
  nivelesInteractividad:any[];
  densiadesSemanticas:any[];
  destinatarios:any[];
  contextos:any[];
  dificultades:any[];
  edad=12;
  objUsoEdu:any[];

  //asdlkfjasdklj
  tiposActividadSelect:string
  tiposRecursEducativosSelect:string
  nivelesInteractividadSelect:string
  densiadesSemanticasSelect:string
  destinatariosSelect:string
  contextosSelect:string
  dificultadesSelect:string

  constructor(
    private componentePrincipal: AppComponent,
    private lompadservice:LompadService
    ) { }

  ngOnInit(): void {
    this.tiposActividad=[
      {label: 'Activo', value: 'active', code: 'ac'},
      {label: 'Expositivo', value: 'expositive', code: 'ex'},    
      {label: 'Combinado', value:  'mixed', code: 'com'} 
    ];

    this.tiposRecursEducativos=[
      {label: 'Ejercicio', value: 'exercise', code: 'ejer'},
      {label: 'Simulación', value: 'simulation', code: 'sim'},
      {label: 'Cuestionario', value: 'questionnarie', code: 'cuest'},
      {label: 'Diagrama', value: 'diagram', code: 'dia'},
      {label: 'Figura', value: 'figure', code: 'fig'},
      {label: 'Gráfico', value: 'graph', code: 'gra'},
      {label: 'Indice', value:  'index', code: 'in'},
     
    ];
    this.nivelesInteractividad=[
      {label: 'muy bajo', value: 'very low', code: 'mb'},
      {label: 'bajo', value: 'low', code: 'baj'},
      {label: 'medio', value: 'medium', code: 'med'},
      {label: 'alto', value: 'high', code: 'alt'},
      {label: 'muy alto', value: 'very high', code: '34523'},
    ];
    this.densiadesSemanticas=[
      {label: 'muy bajo', value: 'very low', code: 'mb'},
      {label: 'bajo', value: 'low', code: 'baj'},
      {label: 'medio', value: 'medium', code: 'med'},
      {label: 'alto', value: 'high', code: 'alt'},
      {label: 'muy alto', value: 'very high', code: '34523'},
    ];
    this.destinatarios=[
      {label: 'autor', value: 'author', code: 'aut'},
      {label: 'profesor', value: 'theacher', code: 'pro'},
      {label: 'aprendiz', value: 'learner', code: 'aprend'},
      {label: 'admimistrador', value: 'manager', code: 'mana'}  
    ];
    this.contextos=[
      {label: 'escuela', value:  'school', code: 'es'},    
      {label: 'educación secundaria', value: 'higher education', code: 'edu_s'},    
      {label: 'entrenamiento', value: 'training', code: 'entre'},    
      {label: 'otro', value:  'other', code: 'otro'},    

    ];
    this.dificultades=[
      {label: 'muy facíl', value:  'very easy', code: 'mf'},    
      {label: 'facíl', value: 'easy', code: 'f'},    
      {label: 'medio', value: 'medium', code: 'm'},    
      {label: 'dificíl', value: 'difficult', code: 'd'},
      {label: 'muy dificíl', value:'very difficult', code: 'md'}
    ];

    this.ObjOptions=this.componentePrincipal.objOptions;

    this.objUsoEdu=this.lompadservice.getUsoEducativo();
    console.log("DEsde Uso Edu: ", this.objUsoEdu);

    this.tiposActividadSelect=this.objUsoEdu["Interactivity Type"];
    this.tiposRecursEducativosSelect=this.objUsoEdu["Learning Resource Type"];
    this.nivelesInteractividadSelect=this.objUsoEdu["Interactivity Level"];
    this.densiadesSemanticasSelect=this.objUsoEdu["Semantic Density"];
    this.destinatariosSelect=this.objUsoEdu["Intended End User Roles"];
    this.contextosSelect=this.objUsoEdu["Context"];
    this.dificultadesSelect=this.objUsoEdu["Difficulty"];



  }

}
