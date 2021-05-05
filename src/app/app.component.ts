import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    horizontalMenu: boolean;

    darkMode = false;

    menuColorMode = 'light';

    menuColor = 'layout-menu-light';

    themeColor = 'blue';

    layoutColor = 'blue';

    ripple = true;

    inputStyle = 'outlined';

    constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {

        this.translate.addLangs(['es','en']);
        this.translate.setDefaultLang('en');
        // this.translate.use('en'); // ESTE SERIA EL METODO PARA REALIZAR EL CAMBIO DE IDIOMA
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
