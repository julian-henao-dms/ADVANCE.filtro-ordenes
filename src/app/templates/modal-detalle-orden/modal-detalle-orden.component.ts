import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detalle-orden',
  templateUrl: './modal-detalle-orden.component.html',
  styleUrls: ['./modal-detalle-orden.component.scss']
})
export class ModalDetalleOrdenComponent implements OnInit {
  @Input() imgModalUrl = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
