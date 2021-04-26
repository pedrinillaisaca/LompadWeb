import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObjaprendizajeModule } from '../../modulos/objaprendizaje/objaprendizaje.module';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  objson: JSON;
  variable:any;
  mostrar:any;
  // obj: any={
  //     "lom": {"@xmlns": "http://ltsc.ieee.org/xsd/LOM", "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "@xsi:schemaLocation": "http://ltsc.ieee.org/xsd/LOM http://ltsc.ieee.org/xsd/lomv1.0/lom.xsd", "general": {"identifier": {"catalog": "Plataforma Agrega", "entry": "ODE-9931462b-f68f-3149-95d5-9929281eb6b3"}, "title": {"string": {"@language": "es", "#text": "El sistema financiero"}}, "language": "es", "description": {"string": {"@language": "es", "#text": "En este REA se analiza el sistema financiero de la economía, fundamental para sustentar el normal desarrollo de las actividades productivas y que por otra parte, su crecimiento y desregulación, lo ha convertido en algo tan complejo como peligroso."}}, "keyword": {"string": [{"@language": "es", "#text": "sistema financiero"}, {"@language": "es", "#text": "economía"}, {"@language": "es", "#text": "acciones"}, {"@language": "es", "#text": "mercado"}]}, "coverage": {"string": "finanzas"}, "structure": {"source": "LOMv1.0", "value": "linear"}, "aggregationLevel": {"source": "LOMv1.0", "value": "2"}}, "lifeCycle": {"version": {"string": {"@language": "es", "#text": "LOM-ESv1.0"}}, "status": {"source": "LOMv1.0", "value": "final"}, "contribute": [{"role": {"source": "LOMv1.0", "value": "author"}, "entity": "BEGIN:VCARD\nVERSION:3.0\nN:Carreño;Francisco;;;\nFN:Francisco Carreño\nEMAIL;TYPE=INTERNET:francisco.carreno@murciaeduca\nORG:Plataforma Agrega-WebSemantica\nEND:VCARD", "date": {"dateTime": "2020-03-18T09:45:56.22Z", "description": {"string": "Fecha de publicación en Agrega"}}}, {"entity": "BEGIN:VCARD\nVERSION:3.0\nN:Carreño;Francisco;;;\nFN:Francisco Carreño\nEMAIL;TYPE=INTERNET:francisco.carreno@murciaeduca\nORG:Plataforma Agrega-WebSemantica\nEND:VCARD", "date": {"dateTime": "2020-03-10T10:55:41.22Z", "description": {"string": "Fecha de creación en Agrega"}}}]}, "metaMetadata": {"identifier": {"catalog": "Plataforma Agrega", "entry": "ODE-9931462b-f68f-3149-95d5-9929281eb6b3-meta"}, "contribute": {"role": {"source": "LOMv1.0", "value": "creator"}, "entity": "BEGIN:VCARD\nVERSION:3.0\nN:Carreño;Francisco;;;\nFN:Francisco Carreño\nEMAIL;TYPE=INTERNET:francisco.carreno@murciaeduca.es\nORG:Plataforma Agrega-WebSemantica\nEND:VCARD", "date": {"dateTime": "2020-05-25T19:09:31.00Z", "description": {"string": "Fecha de creación"}}}, "metadataSchema": "LOM-ESv1.0", "language": "es"}, "technical": {"format": "text/html", "size": "16", "location": "http://agrega.educacion.es/ODE/es/es_2020052512_9190944", "requirement": {"orComposite": {"type": {"source": "LOMv1.0", "value": "browser"}, "name": {"source": "LOMv1.0", "value": "any"}, "minimumVersion": "LOM-ESv1.0"}}, "installationRemarks": {"string": {"@language": "es", "#text": "Solo se requiere el intalador de un navegador a su conveniencia"}}, "otherPlatformRequirements": {"string": {"@language": "es", "#text": "conexion a internet"}}}, "educational": {"interactivityType": {"source": "LOMv1.0", "value": "mixed"}, "learningResourceType": {"source": "LOMv1.0", "value": "narrative text"}, "interactivityLevel": {"source": "LOMv1.0", "value": "medium"}, "semanticDensity": {"source": "LOMv1.0", "value": "medium"}, "intendedEndUserRole": {"source": "LOMv1.0", "value": "learner"}, "context": {"source": "LOMv1.0", "value": "other"}, "typicalAgeRange": [{"string": {"@language": "es", "#text": "15-16"}}, {"string": {"@language": "es", "#text": "16-18"}}], "difficulty": {"source": "LOMv1.0", "value": "medium"}, "typicalLearningTime": {"duration": "P15Y", "description": {"string": {"@language": "es", "#text": "CONOCIMIENTO PREVIO: No son necesarios conocimientos previos pero se requiere un desarrollo cognitivo e intelectual equiparable a la de alumnos mayores de 15 años"}}}, "description": {"string": "Conocer qué es el sistema financiero y quienes son sus intermediarios principales, estudiar los activos financieros, analizar los mercados financieros más importantes, reconocer la importancia y el papel del ahorro y valorar la importancia y los riesgos que entraña el endeudamiento."}, "language": "es"}, "rights": {"cost": {"source":"LOMv1.0", "value": "no"}, "copyrightAndOtherRestrictions": {"source": "LOMv1.0", "value": "yes"}, "description": {"string": "es_andalucia_20090324,es_aragon_20080930,es_baleares_200907131205,es_canarias_20090114,es_cantabria_20081215,es_clm_20091103121523455,es_castillayleon_201002241811,es_euskadi_20100423,es_extremadura_20111222,galicia20091006,es_larioja_20081107,es_{nodo}_20080923,es_na_90348943,es_valencia_201101241416,es_cnice_20080623"}}, "relation": {"kind": {"source": "LOMv1.0", "value": "isbasedon"}, "resource": {"identifier": {"catalog": "Terminos Financieros"}, "description": {"string": "Documento completo de los terminos mas usados en finanzas"}}}, "annotation": {"entity": "BEGIN:VCARD\nVERSION:3.0\nN:Carreño;Francisco;;;\nFN:Francisco Carreño\nEMAIL;TYPE=INTERNET:francisco.carreno@murciaeduca.es\nORG:Plataforma Agrega-WebSemantica\nEND:VCARD", "date": {"dateTime": "2021-01-25T20:00:09.00Z", "description": {"string": {"@language": "es", "#text": "fecha de revision"}}}, "description": {"string": {"@language": "es", "#text": "Rervision de metadatos"}}, "modeaccess": {"source": "LOMv1.0", "value": "text"}, "modeaccesssufficient": {"source": "LOMv1.0", "value": "text"}, "Rol": {"source": "LOMv1.0", "value": "teachers"}}, "classification": {"purpose": {"source": "LOMv1.0", "value": "educational level"}, "taxonPath": [{"source": {"string": {"@language": "es", "#text": "Nivel educativo LOM-ESv1.0"}}, "taxon": [{"id": "4", "entry": {"string": {"@language": "es", "#text": "Educación Secundaria Obligatoria"}}}, {"id": "4.4", "entry": {"string": "Cuarto curso"}}]}, {"source": {"string": {"@language": "es", "#text": "ETB-LRE MEC-CCAA V.1.0"}}, "taxon": [{"id": "M60", "entry": {"string": {"@language": "es", "#text": "60 SISTEMA EDUCATIVO"}}}, {"id": "403", "entry": {"string": {"@language": "es", "#text": "sistema educativo"}}}]}], "description": {"string": {"@language": "es", "#text": "Todos estos comparten informacion recopilado de varios cursos"}}, "keyword": {"string": [{"@language": "es", "#text": "sistema financiero"}, {"@language": "es", "#text": "mercado"}]}}, "accesibility": {"description": {"string": "El presente OAS contiene un resimen de conocimientos previos de la necesidad de sistemas finacieros siendo mas un texto centrado en lectura y comprension"}, "accessibilityfeatures": {"resourcecontent": {"br": ["alternativeText", "structuralNavigation", "timingControl"]}}, "accessibilityhazard": {"properties": {"br": ["noFlashingHazard", "noMotionSimulationHazard", "noSoundHazard"]}}, "accessibilitycontrol": {"methods": {"br": "fullMouseControl"}}, "accessibilityAPI": {"compatibleresource": {"br": ["ARIA", "androidAccessibility", "iOSAccessibility"]}}}}
  // };

  obj:any={
    "@schemaLocation": "http://ltsc.ieee.org/xsd/LOM http://ltsc.ieee.org/xsd/lomv1.0/lom.xsd",
    "general": {
       "identifier": [
          {
             "catalog": "catalogop",
             "entry": "entradap"
          },
          {
             "catalog": "catalogo1",
             "entry": "catalogo1"
          }
       ],
       "title": {
          "string": [
             {
                "@language": "fra-CA",
                "#text": "este es el title"
             },
             {
                "@language": "none",
                "#text": "este es el title 1"
             }
          ]
       },
       "language": "none",
       "description": [
          {
             "string": [
                {
                   "@language": "none",
                   "#text": "esta es la descrip"
                },
                {
                   "@language": "fra",
                   "#text": "descri de la descrip"
                }
             ]
          },
          {
             "string": {
                "@language": "none",
                "#text": "descricion 1"
             }
          }
       ],
       "keyword": {
          "string": {
             "@language": "fra",
             "#text": "palabra clave"
          }
       },
       "coverage": [
          {
             "string": {
                "@language": "none",
                "#text": "ambito"
             }
          },
          {
             "string": {
                "@language": "none",
                "#text": "ambito 1"
             }
          }
       ],
       "structure": {
          "source": "LOMv1.0",
          "value": "networked"
       },
       "aggregationLevel": {
          "source": "LOMv1.0",
          "value": "1"
       }
    },
    "lifeCycle": {
       "version": {
          "string": {
             "@language": "none",
             "#text": "0.1"
          }
       },
       "status": {
          "source": "LOMv1.0",
          "value": "draft"
       },
       "contribute": {
          "role": {
             "source": "LOMv1.0",
             "value": "unknown"
          },
          "entity": "BEGIN:VCARD\nVERSION:3.0\nN:apellido entidad;nombre entidad;;;\nFN:nombre entidad apellido entidad\nEMAIL;TYPE=INTERNET:mail entidad\nORG:organizacion\nEND:VCARD",
          "date": {
             "dateTime": "2021-04-15T12:23:12",
             "description": {
                "string": {
                   "@language": "none",
                   "#text": "descripcion de la contribucion"
                }
             }
          }
       }
    }
 };

 

  constructor() {
    
   }

  ngOnInit(): void {

    this.objson= <JSON>this.obj;
    // this.variable=this.objson['members'];
    this.variable=this.objson;
    // console.log("claves: ",Object.keys(this.variable));
    // console.log("valor: ",Object.values(this.variable));
    // this.eachRecursive(this.variable);
    // this.mostrar=this.variable.lom.general.identifier.catalog
    this.mostrar=this.variable.general.description[0].string[1]['#text']
    
  }

   eachRecursive(obj)
{
    for (var k in obj){      

      if (typeof obj[k] == "object" && obj[k] !== null){
        this.eachRecursive(obj[k]);                  
      }else{

      //   var resultArray = Object.keys(obj).map(function(objetoNamedIndex){
      //     let person = obj[objetoNamedIndex];
      //     // do something with person
      //     return person;
      // });
        // console.log("=>",k);//AQUI ESTAN LAS VARIABLES
        // console.log("CLAVE: =>",Object.keys(obj));//CLAV3S DE  CADA OBJETO 
        console.log("VALOR: ",obj[k]);//EL VALOR DE CADA NODO        
      }                             
    }
}

}
