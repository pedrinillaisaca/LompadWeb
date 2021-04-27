import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usoeducativo',
  templateUrl: './usoeducativo.component.html',
  styleUrls: ['./usoeducativo.component.css']
})
export class UsoeducativoComponent implements OnInit {

  constructor() { }
  tiposActividad:any[];
  tiposRecursEducativos:any[];
  nivelesInteractividad:any[];
  densiadesSemanticas:any[];
  destinatarios:any[];
  contextos:any[];
  dificultades:any[];
  

  ngOnInit(): void {
    this.tiposActividad=[
      {label: 'Activo', value: {id: 1, name: 'Activo', code: 'ac'}},
      {label: 'Expositivo', value: {id: 2, name: 'Expositivo', code: 'ex'}},    
      {label: 'Combinado', value: {id: 3, name: 'Combinado', code: 'com'}}    
    ];

    this.tiposRecursEducativos=[
      {label: 'Ejercicio', value: {id: 1, name: 'Ejercicio', code: 'ejer'}},
      {label: 'Simulación', value: {id: 2, name: 'Simulación', code: 'sim'}},
      {label: 'Cuestionario', value: {id: 3, name: 'Cuestionario', code: 'cuest'}},
      {label: 'Diagrama', value: {id: 4, name: 'Diagrama', code: 'dia'}},
      {label: 'Figura', value: {id: 5, name: 'Figura', code: 'fig'}},
      {label: 'Gráfico', value: {id: 6, name: 'Gráfico', code: 'gra'}},
      {label: 'Indice', value: {id: 7, name: 'Indice', code: 'in'}},
     
    ];
    this.nivelesInteractividad=[
      {label: 'muy bajo', value: {id: 1, name: 'muy bajo', code: 'mb'}},
      {label: 'bajo', value: {id: 2, name: 'bajo', code: 'baj'}},
      {label: 'medio', value: {id: 3, name: 'medio', code: 'med'}},
      {label: 'alto', value: {id: 4, name: 'alto', code: 'alt'}}    
    ];
    this.densiadesSemanticas=[
      {label: 'muy bajo', value: {id: 1, name: 'muy bajo', code: 'mb'}},
      {label: 'bajo', value: {id: 2, name: 'bajo', code: 'baj'}},
      {label: 'medio', value: {id: 3, name: 'medio', code: 'med'}},
      {label: 'alto', value: {id: 4, name: 'alto', code: 'alt'}}    
    ];
    this.destinatarios=[
      {label: 'autor', value: {id: 1, name: 'autor', code: 'aut'}},
      {label: 'profesor', value: {id: 2, name: 'profesor', code: 'pro'}},
      {label: 'aprendiz', value: {id: 3, name: 'aprendiz', code: 'aprend'}}    
    ];
    this.contextos=[
      {label: 'escuela', value: {id: 1, name: 'escuela', code: 'es'}},    
      {label: 'educación secundaria', value: {id: 2, name: 'educación secundaria', code: 'edu_s'}},    
      {label: 'entrenamiento', value: {id: 3, name: 'entrenamiento', code: 'entre'}},    
      {label: 'otro', value: {id: 4, name: 'otro', code: 'otro'}},    

    ];
    this.dificultades=[];
  }

}
