import { Component, OnInit } from '@angular/core';

interface DetalleTabla {
  descripcion: string;
  cantidad: number,
  valor: number;
}

@Component({
  selector: 'app-tabla-descripcion-servicio',
  templateUrl: './tabla-descripcion-servicio.component.html',
  styleUrls: ['./tabla-descripcion-servicio.component.scss']
})
export class TablaDescripcionServicioComponent {

  displayedColumns: string[] = ['descripcion', 'cantidad', 'valor'];
  detalles: DetalleTabla[] = [
    {descripcion: 'Farolas', cantidad: 2, valor: 4},
    {descripcion: 'Llantas', cantidad: 4, valor: 5},
    {descripcion: 'Parachoque', cantidad: 1, valor: 4},
    {descripcion: 'Antena', cantidad: 1, valor: 25},
    {descripcion: 'Retrovisor', cantidad: 2, valor: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.detalles.map(d => d.valor).reduce((acc, value) => acc + value, 0);
  }
}
