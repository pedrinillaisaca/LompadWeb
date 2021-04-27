import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.component.html',
  styleUrls: ['./derechos.component.css']
})
export class DerechosComponent implements OnInit {

  constructor() { }
  decision:any[];
  ngOnInit(): void {
    this.decision=[
      {label: 'si', value: {id: 1, name: 'si', code: 'yes'}},
      {label: 'no', value: {id: 2, name: 'no', code: 'no'}}
    ];
  }

}
