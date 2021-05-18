import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    idiomas: any[];

    horizontalMenu: boolean;

    darkMode = false;

    menuColorMode = 'light';

    menuColor = 'layout-menu-light';

    themeColor = 'blue';

    layoutColor = 'blue';

    ripple = true;

    inputStyle = 'outlined';

    constructor(private primengConfig: PrimeNGConfig , public translate:TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('es');

        // this.translate.addLangs(['es','en']);
        // this.translate.setDefaultLang('en');
        // this.translate.use('en'); // ESTE SERIA EL METODO PARA REALIZAR EL CAMBIO DE IDIOMA
    }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.idiomas=[
            {label: 'es', value: {id: 1, name: 'es', code: 'es'}},
            {label: 'en', value: {id: 2, name: 'en', code: 'en'}},
            {label: 'fr', value: {id: 3, name: 'fr', code: 'fr'}},        
        ];
    }

    public cambioIdiomaAplication(event){
        console.log(event.value.name);
        this.translate.use(event.value.name);
    }
}
