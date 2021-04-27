import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  constructor() { }
  propositos:any[];
  ngOnInit(): void {
    this.propositos=[
      {label: 'diciplina', value: {id: 1, name: 'diciplina', code: 'dis'}},
      {label: 'idea', value: {id: 1, name: 'idea', code: 'id'}},
      {label: 'prerequisito', value: {id: 1, name: 'prerequisito', code: 'pre'}},
      {label: 'objetivo educativo', value: {id: 1, name: 'objetivo educativo', code: 'o_b'}},
      {label: 'accesibilidad', value: {id: 1, name: 'accesibilidad', code: 'acc'}},
      {label: 'nivel educativo', value: {id: 1, name: 'nivel educativo', code: 'n_ed'}},
      {label: 'nivel de habilidad', value: {id: 1, name: 'nivel de habilidad', code: 'n_hab'}},
      {label: 'nivel de seguridad', value: {id: 1, name: 'nivel de seguridad', code: 'n_seg'}},
    ];
  }

}
