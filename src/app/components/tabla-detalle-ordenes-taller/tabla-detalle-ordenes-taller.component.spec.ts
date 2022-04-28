import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDetalleOrdenesTallerComponent } from './tabla-detalle-ordenes-taller.component';

describe('TablaDetalleOrdenesTallerComponent', () => {
  let component: TablaDetalleOrdenesTallerComponent;
  let fixture: ComponentFixture<TablaDetalleOrdenesTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDetalleOrdenesTallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDetalleOrdenesTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
