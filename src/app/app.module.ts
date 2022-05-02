import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './templates/sidenav/sidenav.component';
import { DatosClienteComponent } from './components/datos-cliente/datos-cliente.component';
import { DatosVehiculoComponent } from './components/datos-vehiculo/datos-vehiculo.component';
import { TablaDescripcionServicioComponent } from './components/tabla-descripcion-servicio/tabla-descripcion-servicio.component';
import { HomeComponent } from './components/home/home.component';
import { FiltroOrdenesComponent } from './components/filtro-ordenes/filtro-ordenes.component';
import { ModalDetalleOrdenComponent } from './templates/modal-detalle-orden/modal-detalle-orden.component';
import { OrdenTallerComponent } from './components/orden-taller/orden-taller.component';
import { TablaDetalleOrdenesTallerComponent } from './components/tabla-detalle-ordenes-taller/tabla-detalle-ordenes-taller.component';
import { FiltroTotalVehiculosComponent } from './components/filtro-total-vehiculos/filtro-total-vehiculos.component';

// Material

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { OrdenTallerAltComponent } from './components/orden-taller-alt/orden-taller-alt.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DatosClienteComponent,
    DatosVehiculoComponent,
    TablaDescripcionServicioComponent,
    HomeComponent,
    FiltroOrdenesComponent,
    ModalDetalleOrdenComponent,
    OrdenTallerComponent,
    TablaDetalleOrdenesTallerComponent,
    FiltroTotalVehiculosComponent,
    OrdenTallerAltComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
