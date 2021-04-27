import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css']
})
export class TecnicaComponent implements OnInit {

  constructor() { }
  tiposOr:any[];

  ngOnInit(): void {

    this.tiposOr=[
      {label: 'Sistema Operativo', value: {id: 1, name: 'Sistema Operativo', code: 'sys_o'}},
      {label: 'Navegador', value: {id: 2, name: 'Navegador', code: 'nav'}}    
    ];
  }

}
