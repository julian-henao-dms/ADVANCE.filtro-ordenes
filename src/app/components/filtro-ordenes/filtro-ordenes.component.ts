import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalleOrdenComponent } from 'src/app/templates/modal-detalle-orden/modal-detalle-orden.component';

@Component({
  selector: 'app-filtro-ordenes',
  templateUrl: './filtro-ordenes.component.html',
  styleUrls: ['./filtro-ordenes.component.scss']
})
export class FiltroOrdenesComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this.dialog.open(ModalDetalleOrdenComponent, {
      data:{

       },
       width: '90%',
      
    });
 
    dialogRef.afterClosed().subscribe(result => {
  
    });
  }
}
