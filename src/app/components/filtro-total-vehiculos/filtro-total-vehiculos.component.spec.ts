import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTotalVehiculosComponent } from './filtro-total-vehiculos.component';

describe('FiltroTotalVehiculosComponent', () => {
  let component: FiltroTotalVehiculosComponent;
  let fixture: ComponentFixture<FiltroTotalVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroTotalVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroTotalVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
