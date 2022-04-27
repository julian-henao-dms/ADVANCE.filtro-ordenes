import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-ordenes',
  templateUrl: './filtro-ordenes.component.html',
  styleUrls: ['./filtro-ordenes.component.scss']
})
export class FiltroOrdenesComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
