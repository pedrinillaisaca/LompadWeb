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
										<p-dropdown [options]="idiomas" (onChange)="cambioIdioma($event)"  styleClass="p-mb-2 p-mb-md-0"></p-dropdown>
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
								<p-dropdown [options]="perfiles"  [(ngModel)]='perfilesSelect'  (onChange)="cambioPerfil($event)" styleClass="p-mb-2 p-mb-md-0"></p-dropdown>
									
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
	perfilesSelect="SCORM";
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
		// this.perfilesSelect=this.lompadService.getPerfil();
		// console.log("DESDE TOOPBAR PERFIL: ",this.perfilesSelect);

		this.idiomas=[
            {label: 'es', value: {id: 1, name: 'es', code: 'es'}},
            {label: 'en', value: {id: 2, name: 'en', code: 'en'}},
            {label: 'fr', value: {id: 3, name: 'fr', code: 'fr'}},        
        ];

		this.perfiles=[
            {label: 'IEEE LOM', value: 'IEEE LOM', code: 'ieee'},
            {label: 'CanCore', value: 'CanCore', code: 'cancore'},
            {label: 'SCORM', value: 'SCORM', code: 'scorm'},
			{label: 'LMRI', value:  'LMRI', code: 'lmri'}              
        ];

		
	
		// this.objprincipal$=this.lompadService.getObjectPrincipal$();
		// this.objprincipal$.subscribe(objto => this.objprincipal=objto);

		this.lompadService.objPricipal$.subscribe(param=>{
			this.objprincipal=param;
		});

		this.lompadService.objPrincipalXML$.subscribe(param=>{
			this.objXML=param;
			
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
	someHtml='naty <script>alert("naty")</script>';
	url='javascript:alert("naty")';



	unloadHandler(event: Event) {
		this.toas.add({ key: 'tst', severity: 'success', summary: 'naty', detail: 'Message sent' });
	}
		   

}
