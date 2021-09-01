# Mirage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://34.133.222.217:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Indicaciones para despliege en un servidor 

En el caso usar una distribución Centos desacticar SElinux caso contrario no funcionara las configuraciones
con un servidor web como en el caso de nginx 

https://www.cyberciti.biz/faq/disable-selinux-on-centos-7-rhel-7-fedora-linux/

https://www.devdungeon.com/content/deploy-angular-apps-nginx 

## En el caso de desplegar con un contendor docker 


`docker build -t ultimate .`
`docker create volume nodenew`
`docker run -d -it -p 8080:80 -v nodenew:/usr/share/nginx/html ultimate`

## Ruta por defecto de los volumenes de docker 

`/var/lib/docker/volumes/`

## Comando para producción:

`npm run build --prod`

## Comando para aplicar cambios a un proyecto en producción

`ng build --prod`
