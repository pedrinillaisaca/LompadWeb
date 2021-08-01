import { Component,ViewChild } from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { AppComponent } from './app.component';
import { LompadService } from './servicios/lompad.service';
import * as JsonToXML from 'js2xmlparser';



@Component({
    selector: 'app-topbar',
    template: `
        <div class="layout-topbar">
			<div class="layout-topbar-wrapper">
                <div class="layout-topbar-left">
					<!-- <div class="layout-topbar-logo-wrapper">
						<a href="#" class="layout-topbar-logo">
							<img src="assets/layout/images/logo-mirage@2x.png" alt="mirage-layout" />
							<span class="app-name">PEDRO ILLAISACAAAAAAAAAAAAA </span>
						</a>
					</div> -->

					<a href="#" class="sidebar-menu-button" (click)="appMain.onMenuButtonClick($event)">
						<i class="pi pi-bars"></i>
					</a>

					<a href="#" class="megamenu-mobile-button" (click)="appMain.onMegaMenuMobileButtonClick($event)">
						<i class="pi pi-align-right megamenu-icon"></i>
					</a>

					<a href="#" class="topbar-menu-mobile-button" (click)="appMain.onTopbarMobileMenuButtonClick($event)">
						<i class="pi pi-ellipsis-v"></i>
					</a>

					<div class="layout-megamenu-wrapper">
					<!-- PONER AQUI EL ENLACE AL INICIO -->
						<!-- <a class="layout-megamenu-button" href="#" (click)="appMain.onMegaMenuButtonClick($event)">
							<i class="pi pi-comment"></i>
							Mega Menu
						</a>						 -->

						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuActive}"
                            (click)="appMain.onMegaMenuClick($event)">
							<div class="layout-topbar-wrapper">
								<div class="layout-topbar-left"> 
									<div class="p-col-6">
										<label>{{'Lenguaje' | translate}}</label>                                                                                 
									</div>          
									<div class="p-col-6">
										<p-dropdown [options]="idiomas" (onChange)="cambioIdioma($event)" styleClass="p-mb-2 p-mb-md-0"></p-dropdown>
									</div>
								</div>                                       
                			</div>
						</ul>

						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuActive}"
                            (click)="appMain.onMegaMenuClick($event)">
							<li [ngClass]="{'active-topmenuitem': activeItem === 1}" (click)="mobileMegaMenuItemClick(1)">
								<a href="#">JavaServer Faces <i class="pi pi-angle-down"></i></a>
								<ul>
									<li class="active-row ">
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>PrimeFaces</h5>
                                        <span>UI Components for JSF</span>
                                    </span>
									</li>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Premium Templates</h5>
                                        <span>UI Components for JSF</span>
                                    </span>
									</li>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Extensions</h5>
                                        <span>UI Components for JSF</span>
                                    </span>
									</li>
								</ul>
							</li>
							<li [ngClass]="{'active-topmenuitem': activeItem === 2}" (click)="mobileMegaMenuItemClick(2)">
								<a href="#">Angular <i class="pi pi-angle-down"></i></a>
								<ul>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>PrimeNG</h5>
                                        <span>UI Components for Angular</span>
                                    </span>

									</li>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Premium Templates</h5>
                                        <span>UI Components for Angular</span>
                                    </span>
									</li>
								</ul>
							</li>
							<li [ngClass]="{'active-topmenuitem': activeItem === 3}" (click)="mobileMegaMenuItemClick(3)">
								<a href="#">React <i class="pi pi-angle-down"></i></a>
								<ul>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>PrimeReact</h5>
                                        <span>UI Components for React</span>
                                    </span>
									</li>
									<li class="active-row">
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Premium Templates</h5>
                                        <span>UI Components for React</span>
                                    </span>
									</li>
								</ul>
							</li>
						</ul>



						<!-- MEGA MENU PERSONALIZADO  -->
						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuPerfiles}"
							(click)="appMain.onMegaMenuPerfilClick($event)" style="margin-left: 13cm;">
							<li>
								<a href="#">{{'Perfíles' | translate}}<i class="pi pi-angle-down"></i></a>
								<ul>
								<!-- (onChange)=""  -->
								<p-dropdown [options]="perfiles" (onChange)="cambioPerfil($event)" styleClass="p-mb-2 p-mb-md-0"></p-dropdown>
									
								</ul>
							</li>
							
						</ul>

						<!-- MEGA MENU PERSONALIZADO 
						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuViewJSON}"
							(click)="appMain.onMegaMenuPerfilClick($event)" style="margin-left: 0cm;">
							<li>
								
								
							</li>
							
						</ul> -->


						<!-- MEGA MENU PERSONALIZADO  
						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuViewXML}"
							(click)="appMain.onMegaMenuPerfilClick($event)" style="margin-left: 5cm;">
							<li>
								<h5>ver XML</h5>				
				
							</li>
							
						</ul>-->
					
						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="runDialog(1)">							
							Previsualización JSON
						</a>

						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="runDialog(2)">							
							Previsualización XML
						</a>

						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="appMain.onMegamenuButtonPerfiles($event)">							
						{{'Perfíles' | translate}}
						</a>


						


						<!-- <a class="layout-megamenu-button" href="#" (click)="appMain.onMegaMenuButtonClick($event)">
							<i class="pi pi-comment"></i>
							Mega Menu
						</a> -->
					</div>
					
                </div>

				<!-- ICONOS "-->
				<div class="icons" style="padding-top: 2.4%;">
						<div class="icon icon-hastag">
							<i class="pi pi-home" ></i>
						</div>							
				</div>
				               
				<div class="layout-topbar-wrapper">
					<div class="layout-topbar-left"> 
 						<div class="p-col-6">
                        	<label>{{'Lenguaje' | translate}}</label>                       
                       <!-- <select #lanSelect (change)="translate.use(lanSelect.value)">
                           <option *ngFor="let lang of translate.getLangs()" [value]="lang"
                           [selected]="lang===translate.currentLang"
                           >{{lang}}</option>
                       </select> -->                                      
                    	</div>          
						<div class="p-col-6">
							<p-dropdown [options]="idiomas" (onChange)="cambioIdioma($event)" styleClass="p-mb-2 p-mb-md-0"></p-dropdown>
						</div>

					</div>
                   
                    
                </div>
            </div>
        </div>
		

		<p-dialog  id="we" [(visible)]="display1" [style]="{width: '80%'}" header="" [modal]="true" styleClass="p-fluid">
        <ng-template pTemplate="content">	
			
            <div class="p-field">	
			<div *ngIf="band; then thenBlock else elseBlock"></div>
			<ng-template #thenBlock><pre>{{objprincipal | json}}</pre></ng-template>
			<ng-template #elseBlock><pre>{{objXML}}</pre></ng-template>
		
			<pre>{{objMostrar}}</pre>
            </div>
        </ng-template>       
    	</p-dialog>
    `
})
export class AppTopBarComponent {

	object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

	idiomas: any[];
    activeItem: number;
	perfiles: any[];
	objprincipal:any;
	objXML:any;
	objMostrar:any
	display1:boolean;


    constructor(
		public appMain: AppMainComponent,
		private componentePrincipal: AppComponent,
		private loampadService:LompadService
		) {}

	ngOnInit(){
		this.idiomas=[
            {label: 'es', value: {id: 1, name: 'es', code: 'es'}},
            {label: 'en', value: {id: 2, name: 'en', code: 'en'}},
            {label: 'fr', value: {id: 3, name: 'fr', code: 'fr'}},        
        ];

		this.perfiles=[
            {label: 'IEEE LOM', value: {id: 1, name: 'IEEE LOM', code: 'ieee'}},
            {label: 'CanCore', value: {id: 2, name: 'CanCore', code: 'cancore'}},
            {label: 'SCORM', value: {id: 3, name: 'SCORM', code: 'scorm'}},
			{label: 'LMRI', value: {id: 4, name: 'LMRI', code: 'lmri'}}                
        ];

		// this.objprincipal=this.loampadService.getObjectGeneral();
		// console.log("pedroooooooooooooooooooooo      ",this.objprincipal)
		this.objprincipal=[{
			"DATA": {
				"general": {
					"Identifier": {
						"Catalog": "Catalogo1",
						"Entry": "Entrada 1"
					},
					"Title": "Titutlo del general",
					"Language": "es",
					"Description": "Descripcion del general.",
					"Keyword": [
						"Key1",
						"Key2"
					],
					"Coverage": "AmbitoGeneral",
					"Structure": "atomic",
					"Aggregation Level": "2"
				},
				"lifeCycle": {
					"Version": "1.0",
					"Status": "revised",
					"Contribute": {
						"Role": "validator",
						"Entity": "BEGIN:VCARD\nVERSION:3.0\nN:ApellidoEntidad;Entidad1;;;\nFN:Entidad1 ApellidoEntidad\nEMAIL;TYPE=INTERNET:Sin Correo\nORG:Sin organizacion\nEND:VCARD",
						"Date": "2021-07-15T00:00:00.00Z"
					}
				},
				"metaMetadata": {
					"Identifier": {
						"Catalog": "MetadataCatalog",
						"Schema": ""
					},
					"Contribute": {
						"Role": "creator",
						"Entity": "BEGIN:VCARD\nVERSION:3.0\nN:MetaApellido;MetaEntidad;;;\nFN:MetaEntidad MetaApellido\nEMAIL;TYPE=INTERNET:MetaEmail\nORG:MetaORG\nEND:VCARD",
						"Date": "2021-07-15T00:00:00.00Z"
					},
					"Metadata Schema": "Sin esquema de metadatos.",
					"Language": "es"
				},
				"technical": {
					"Format": "text/html",
					"Size": "200",
					"Location": "Ecuador",
					"Requirement": {
						"OrComposite": {
							"Type": "operating system",
							"Name": "ms-windows",
							"Minimum Version": "0.000",
							"Maximum Version": "1.000"
						}
					},
					"Installation Remarks": "No hay ninguna pauta de instalacion",
					"Other Platform Requirements": "Sin otro requisito",
					"Duration": "P1Y1M1DT1H1M"
				},
				"educational": {
					"Interactivity Type": "active",
					"Learning Resource Type": "simulation",
					"Interactivity Level": "medium",
					"Semantic Density": "high",
					"Intended End User Roles": "learner",
					"Context": "other",
					"Typical Age Range": "10-12",
					"Difficulty": "easy",
					"Typical Learning Time": "P1Y1M1DT1H10M",
					"Description": "Sin descripcion de uso de educativo.",
					"Language": "es"
				},
				"rights": {
					"Cost": "yes",
					"Copyright and Other Restrictions": "yes",
					"Description": "Sin descripcion de los derechossss"
				},
				"relation": {
					"Kind": "haspart",
					"Resource": {
						"Identifier": {
							"Catalog": "Sin catalogo relacion",
							"Entry": "Sin entrada de relacion"
						},
						"Description": "Sin descripcion de relacion."
					}
				},
				"annotation": {
					"Entity": "BEGIN:VCARD\nVERSION:3.0\nN:AnotacionApellido;AnotacionNombre;;;\nFN:AnotacionNombre AnotacionApellido\nEMAIL;TYPE=INTERNET:AnotacionEmail\nORG:AnotacionOrg\nEND:VCARD",
					"Date": "2021-07-15",
					"Description": "Sin descripcion de anotacion.",
					"Mode Access": "auditory",
					"Mode Access Sufficient": "tactile",
					"Rol": "teachers"
				},
				"classification": {
					"Purpose": "accessibility restrictions",
					"Taxon Path": {
						"Source": "Sin fuente taxonomica.",
						"Taxon": {
							"Id": "0000",
							"Entry": "1111"
						}
					},
					"Description": "Descripcion de la clasificacion.",
					"Keyword": "Palabra clave 1."
				}
			}
		}]

		this.conversionXML();
		this.display1=false;				

	}

	conversionXML(){
		console.log("locaaaa");
		var js2xmlparser = require("js2xmlparser");
		var obj = {
			"firstName": "John",
			"lastName": "Smith",
			"dateOfBirth": new Date(1964, 7, 26),
			"address": {
				"@": {
					"type": "home"
				},
				"streetAddress": "3212 22nd St",
				"city": "Chicago",
				"state": "Illinois",
				"zip": 10000
			},
			"phone": [
				{
					"@": {
						"type": "home"
					},
					"#": "123-555-4567"
				},
				{
					"@": {
						"type": "cell"
					},
					"#": "890-555-1234"
				},
				{
					"@": {
						"type": "work"
					},
					"#": "567-555-8901"
				}
			],
			"email": "john@smith.com"
		};
		this.objXML=js2xmlparser.parse("DATA",obj);
		console.log("pedro : ",this.objXML);
	}

    mobileMegaMenuItemClick(index) {
        this.appMain.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }

	cambioIdioma(event){
		this.componentePrincipal.cambioIdiomaAplication(event);
	}


	cambioPerfil(event){
		this.componentePrincipal.cambioPerfil(event);		
	}
	band:boolean;
	runDialog(param:number){
		this.display1=true;	
		if (param === 1){
			this.band=true;
		}else{
			this.band=false;
		}
	}
	


 

  




}
