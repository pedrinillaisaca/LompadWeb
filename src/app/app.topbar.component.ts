import { Component } from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="layout-topbar">
			<div class="layout-topbar-wrapper">
                <div class="layout-topbar-left">
					<div class="layout-topbar-logo-wrapper">
						<a href="#" class="layout-topbar-logo">
							<img src="assets/layout/images/logo-mirage@2x.png" alt="mirage-layout" />
							<span class="app-name">LOM PAD </span>
						</a>
					</div>

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
						<a class="layout-megamenu-button" href="#" (click)="appMain.onMegaMenuButtonClick($event)">
							<i class="pi pi-comment"></i>
							Mega Menu
						</a>

						<a class="layout-megamenu-button" href="#" (click)="appMain.onMegaMenuButtonClick($event)">
							<i class="pi pi-comment"></i>
							Mega Menu
						</a>

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
					
						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="appMain.onMegaMenuButtonClick($event)">							
							Previsualización JSON
						</a>

						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="appMain.onMegaMenuButtonClick($event)">							
							Previsualización XML
						</a>

						<a class="layout-megamenu-button" style="margin-left: 30px;" href="#" (click)="appMain.onMegaMenuButtonClick($event)">							
							PENDIENTE
						</a>
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
    `
})
export class AppTopBarComponent {

	idiomas: any[];
    activeItem: number;

    constructor(public appMain: AppMainComponent, private com: AppComponent) {}

	ngOnInit(){
		this.idiomas=[
            {label: 'es', value: {id: 1, name: 'es', code: 'es'}},
            {label: 'en', value: {id: 2, name: 'en', code: 'en'}},
            {label: 'fr', value: {id: 3, name: 'fr', code: 'fr'}},        
        ];

	}

    mobileMegaMenuItemClick(index) {
        this.appMain.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }

	cambioIdioma(event){
		this.com.cambioIdiomaAplication(event);
	}



}
