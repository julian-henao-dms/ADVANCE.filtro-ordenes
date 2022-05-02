import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoValorVehiculoComponent } from './grafico-valor-vehiculo.component';

describe('GraficoValorVehiculoComponent', () => {
  let component: GraficoValorVehiculoComponent;
  let fixture: ComponentFixture<GraficoValorVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoValorVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoValorVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
