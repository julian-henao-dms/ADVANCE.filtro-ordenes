import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
interface DetalleTabla {
  descripcion: string;
  cantidad: number,
  valor: number;
  descuento: number;
  subtotal: number;
  iva: number;
  total: number;
}
@Component({
  selector: 'app-tabla-detalle-ordenes-taller',
  templateUrl: './tabla-detalle-ordenes-taller.component.html',
  styleUrls: ['./tabla-detalle-ordenes-taller.component.scss']
})
export class TablaDetalleOrdenesTallerComponent implements OnInit {

  displayedColumns: string[] = ['descripcion', 'cantidad', 'valor', 'descuento', 'subtotal', 'iva', 'total'];
  detalles: DetalleTabla[] = [
    {descripcion: 'Farolas', cantidad: 2, valor: 4, descuento: 2, subtotal: 6, iva: 1.2 , total: 7.2},
    {descripcion: 'Llantas', cantidad: 4, valor: 5, descuento: 2, subtotal: 6, iva: 1.2 , total: 7.2},
    {descripcion: 'Parachoque', cantidad: 1, valor: 4, descuento: 2, subtotal: 6, iva: 1.2 , total: 7.2},
    {descripcion: 'Antena', cantidad: 1, valor: 25, descuento: 2, subtotal: 6, iva: 1.2 , total: 7.2},
    {descripcion: 'Retrovisor', cantidad: 2, valor: 15, descuento: 2, subtotal: 6, iva: 1.2 , total: 7.2},
  ];
  constructor() { }



  ngOnInit() {
    
  }
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.detalles.map(d => d.valor).reduce((acc, value) => acc + value, 0);
  }
}
