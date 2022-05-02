import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalleOrdenComponent } from 'src/app/templates/modal-detalle-orden/modal-detalle-orden.component';

@Component({
  selector: 'app-orden-taller',
  templateUrl: './orden-taller.component.html',
  styleUrls: ['./orden-taller.component.scss']
})
export class OrdenTallerComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this.dialog.open(ModalDetalleOrdenComponent, {
      data:{
          titulo: 'Detalle de Orden de Taller'
       },
       width: '90%',
      
    });
 
    dialogRef.afterClosed().subscribe(result => {
  
    });
  }
}

