import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoValorFechaComponent } from './grafico-valor-fecha.component';

describe('GraficoValorFechaComponent', () => {
  let component: GraficoValorFechaComponent;
  let fixture: ComponentFixture<GraficoValorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoValorFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoValorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
