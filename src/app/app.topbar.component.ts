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
			<ng-template #thenBlock><pre>{{objprincipal |  json}}

			<!-- <div *ngIf="(objprincipal | async) === true">
			<li class="nav-item">
				<p>hay algo</p>
			</li>
			</div>

			<div *ngIf="(objprincipal | async) === false">
			<li class="nav-item">
				<p>no hay nada</p>
			</li>
			</div> -->

			</pre></ng-template>


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
	objXML:any;
	objMostrar:any
	display1:boolean;

	objprincipal:any;
	


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
	
		// this.objprincipal$=this.loampadService.getObjectPrincipal$();
		// this.objprincipal$.subscribe(objto => this.objprincipal=objto);

		this.loampadService.objPricipal$.subscribe(param=>{
			this.objprincipal=param;
		});

		this.objprincipal=this.loampadService.objPricipal['DATA'];
		
		// this.conversionXML();
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
		// this.loampadService.callComponentMethod("DEsde topbar");
		this.display1=true;	
		if (param === 1){
			this.band=true;
		}else{
			this.band=false;
		}
	}
		   

}
