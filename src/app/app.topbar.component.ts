import { Component, HostListener } from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { AppComponent } from './app.component';
import { LompadService } from './servicios/lompad.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';


@HostListener('window:beforeunload', ['$event'])
@Component({
    selector: 'app-topbar',
    template: `
		<p-toast key="tst"></p-toast>
        <div class="layout-topbar">
			<div class="layout-topbar-wrapper">
                <div class="layout-topbar-left">
					<!-- <div class="layout-topbar-logo-wrapper">
						<a href="#" class="layout-topbar-logo">
							<img src="assets/layout/images/logo-mirage@2x.png" alt="mirage-layout" />
							<span class="app-name"> </span>
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
							(click)="appMain.onMegaMenuPerfilClick($event)" style="margin-left: 10cm;">
							<li>
								<a href="#">{{'Perfíles' | translate}}<i class="pi pi-angle-down"></i></a>
								<ul>
								<!-- (onChange)=""  -->
								<p-dropdown [options]="perfiles" (onChange)="cambioPerfil($event)" styleClass="p-mb-2 p-mb-md-0"></p-dropdown>
									
								</ul>
							</li>
							
						</ul>


						


					

						<!-- MEGA MENU PERSONALIZADO  -->
						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuViewJSON}"
							(click)="appMain.onMegaMenuJSONClick($event)" style="margin-left: 12.3cm;">
							<li>
							<a href="#">{{'Descargar como:' | translate}}<i class="pi pi-angle-down"></i></a>
								<ul><button pButton pRipple type="button" label="JSON" (click)="descargaJSON()"></button></ul>								
								<ul><button pButton pRipple type="button" label="XML" (click)="descargaXML()"></button></ul>																															
							</li>
							
						</ul>


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

						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="appMain.onMegamenuButtonJSON($event)">							
						{{'Descargar' | translate}}
						</a>


						


						<!-- <a class="layout-megamenu-button" href="#" (click)="appMain.onMegaMenuButtonClick($event)">
							<i class="pi pi-comment"></i>
							Mega Menu
						</a> -->
					</div>
					
                </div>

				<!-- ICONOS "
				<div class="icons" style="padding-top: 2.4%;">
						<div class="icon icon-hastag">
							<i class="pi pi-home" ></i>
						</div>							
				</div>-->
				               
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
			<ng-template #thenBlock>
				<pre>{{objprincipal |  json}}</pre>
			</ng-template>


			<ng-template #elseBlock>
				<!-- <pre><div><a [href]='url'> pulsame</a></div></pre> -->
				<pre>{{objXML}}</pre>
			</ng-template>
					
            </div>
        </ng-template>       
    	</p-dialog>


		
    `,
	providers: [MessageService]
})




export class AppTopBarComponent {

	object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

	idiomas: any[];
    activeItem: number;
	perfiles: any[];
	objXML:any;
	objMostrar:any
	display1:boolean;

	objprincipal:any;
	


    constructor(
		public appMain: AppMainComponent,
		private componentePrincipal: AppComponent,
		private lompadService:LompadService,
		private sanitizer: DomSanitizer,
		private toas:MessageService
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
	
		// this.objprincipal$=this.lompadService.getObjectPrincipal$();
		// this.objprincipal$.subscribe(objto => this.objprincipal=objto);

		this.lompadService.objPricipal$.subscribe(param=>{
			this.objprincipal=param;
		});

		this.lompadService.objPrincipalXML$.subscribe(param=>{
			this.objXML=param;
			console.log("DESDE TOOPBAR: ",typeof(this.objXML));
		});

		
		this.display1=false;				

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
		// this.appMain.saveInfoGeneral();
		// this.lompadService.callComponentMethod("DEsde topbar");
		this.display1=true;	
		if (param === 1){
			this.band=true;
		}else{
			this.band=false;
		}
	}


	descargaJSON(){		
		this.lompadService.downloadJSON();
		// this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
		// this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
		// this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
		this.toas.add({ key: 'tst', severity: 'success', summary: 'JSON descargado exitosamente', detail: 'Message sent' });
	}

	descargaXML(){
		this.lompadService.downloadXML();
		this.toas.add({ key: 'tst', severity: 'success', summary: 'XML descargado exitosamente', detail: 'Message sent' });
	}
	htmlData;
	someHtml='pedro <script>alert("pedro")</script>';
	url='javascript:alert("pedro")';

	someMethod(){

		const parser = new DOMParser();
		const xml = parser.parseFromString(this.objXML, 'application/xml');
		let file = xml.documentElement;
		// console.log("SANATIZER: ",file);
		var pedro=`<?xmlversion="1.0"encoding="UTF-8"?><lomxmlns="http://ltsc.ieee.org/xsd/LOM"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:schemaLocation="http://ltsc.ieee.org/xsd/LOMhttp://ltsc.ieee.org/xsd/lomv1.0/lom.xsd"><general><identifier><catalog>Catalogo1</catalog><entry>Entrada1</entry></identifier><title><stringlanguage="es">Titutlodelgeneral</string></title><language>es</language><description><stringlanguage="es">Descripciondelgeneral.</string></description><keyword><stringlanguage="en">Key1</string><stringlanguage="en">Key2</string></keyword><coverage><stringlanguage="es">AmbitoGeneral</string></coverage><structure><source>LOMv1.0</source><value>atomic</value></structure><aggregationLevel><source>LOMv1.0</source><value>2</value></aggregationLevel></general><lifeCycle><version><stringlanguage="en">1.0</string></version><status><source>LOMv1.0</source><value>revised</value></status><contribute><role><source>LOMv1.0</source><value>validator</value></role><entity><![CDATA[BEGIN:VCARDVERSION:3.0N:ApellidoEntidad;Entidad1;;;FN:Entidad1ApellidoEntidadEMAIL;TYPE=INTERNET:SinCorreoORG:SinorganizacionEND:VCARD]]></entity><date><dateTime>2021-07-15T00:00:00.00Z</dateTime><description><stringlanguage="en">EMPTY</string></description></date></contribute></lifeCycle><metaMetadata><identifier><catalog>MetadataCatalog</catalog><entry>SinEntradaParaMeta</entry></identifier><contribute><role><source>LOMv1.0</source><value>creator</value></role><entity><![CDATA[BEGIN:VCARDVERSION:3.0N:MetaApellido;MetaEntidad;;;FN:MetaEntidadMetaApellidoEMAIL;TYPE=INTERNET:MetaEmailORG:MetaORGEND:VCARD]]></entity><date><dateTime>2021-07-15T00:00:00.00Z</dateTime><description><stringlanguage="en">EMPTY</string></description></date></contribute><metadataSchema>Sinesquemademetadatos.</metadataSchema><language>es</language></metaMetadata><technical><format>text/html</format><size>200</size><location>Ecuador</location><requirement><orComposite><type><source>LOMv1.0</source><value>operatingsystem</value></type><name><source>LOMv1.0></source><value>ms-windows</value></name><minimumVersion>0.000</minimumVersion><maximumVersion>1.000</maximumVersion></orComposite></requirement><installationRemarks><stringlanguage="en">Nohayningunapautadeinstalacion</string></installationRemarks><otherPlatformRequirements><stringlanguage="en">Sinotrorequisito</string></otherPlatformRequirements><duration><duration>P1Y1M1DT1H1M</duration><description><stringlanguage="">EMPTY</string></description></duration></technical><educational><interactivityType><source>LOMv1.0</source><value>active</value></interactivityType><learningResourceType><source>LOMv1.0</source><value>simulation</value></learningResourceType><interactivityLevel><source>LOMv1.0</source><value>medium</value></interactivityLevel><semanticDensity><source>LOMv1.0</source><value>high</value></semanticDensity><intendedEndUserRole><source>LOMv1.0</source><value>learner</value></intendedEndUserRole><context><source>LOMv1.0</source><value>other</value></context><typicalAgeRange><stringlanguage="en">10-12</string></typicalAgeRange><difficulty><source>LOMv1.0</source><value>easy</value></difficulty><typicalLearningTime><duration>P1Y1M1DT1H10M</duration><description><stringlanguage="en">Sindescripciondeusodeeducativo.</string></description></typicalLearningTime><description><stringlanguage="en">Sindescripciondeusodeeducativo.</string></description><language>es</language></educational><rights><cost><source>LOMv1.0</source><value>yes</value></cost><copyrightAndOtherRestrictions><source>LOMv1.0</source><value>yes</value></copyrightAndOtherRestrictions><description><stringlanguage="en">Sindescripciondelosderechossss</string></description></rights><relation><kind><source>LOMv1.0</source><value>haspart</value></kind><resource><identifier><catalog>Sincatalogorelacion</catalog><entry>Sinentradaderelacion</entry></identifier><description><stringlanguage="en">Sindescripcionderelacion.</string></description></resource></relation><annotation><entity><![CDATA[BEGIN:VCARDVERSION:3.0N:Leo;EntidadAnotacion1;;;FN:EntidadAnotacion1LeoEMAIL;TYPE=INTERNET:torresleonardo@leo.comORG:NAEND:VCARD]]></entity><date><dateTime>2021-07-22</dateTime><description><string></string></description></date><description><string>OrderedDict([("string","Descdelaentidad.")])</string></description><modeaccess><source>LOMv1.0</source><value>auditory</value></modeaccess><modeaccesssufficient><source>LOMv1.0</source><value>tactile</value></modeaccesssufficient><Rol><source>LOMv1.0</source><value>teachers</value></Rol></annotation><classification><purpose><source>LOMv1.0</source><value>accessibilityrestrictions</value></purpose><taxonPath><source><stringlanguage="en">Sinfuentetaxonomica.</string></source><taxon><id>0000</id><entry><stringlanguage="en">1111</string></entry></taxon></taxonPath><description><stringlanguage="en">Descripciondelaclasificacion.</string></description><keyword><stringlanguage="en">Palabraclave1.</string></keyword></classification><accesibility><description><stringlanguage="en">Sinresumendeaccesibilidad.</string></description><accessibilityfeatures><resourcecontent><br>alternativeText</br><br>longDescription</br><br>structuralNavigation</br><br>synchronizedAudioText</br><br>transcript</br><br>bookmarks</br><br>braille</br><br>latex</br><br>taggedPDF</br><br>ttsMarkup</br></resourcecontent></accessibilityfeatures><accessibilityhazard><properties><br>noFlashingHazard</br><br>noMotionSimulationHazard</br><br>noSoundHazard</br></properties></accessibilityhazard><accessibilitycontrol><methods><br>fullKeyboardControl</br><br>fullMouseControl</br><br>fullVoiceControl</br><br>fullSwitchControl</br></methods></accessibilitycontrol><accessibilityAPI><compatibleresource><br>ARIA</br><br>androidAccessibility</br><br>ATK</br><br>iOSAccessibility</br><br>javaAccessibility</br></compatibleresource></accessibilityAPI></accesibility></lom>`;

		// console.log(JSON.stringify(file))
	   this.htmlData = this.sanitizer.bypassSecurityTrustHtml(pedro); // this line bypasses angular scurity
	   
	   
	  
	  }

	unloadHandler(event: Event) {
		this.toas.add({ key: 'tst', severity: 'success', summary: 'pedro', detail: 'Message sent' });
	}
		   

}
