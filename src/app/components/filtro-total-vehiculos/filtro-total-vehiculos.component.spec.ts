import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTOTALVEHICULOSComponent } from './filtro-total-vehiculos.component';

describe('FiltroTOTALVEHICULOSComponent', () => {
  let component: FiltroTOTALVEHICULOSComponent;
  let fixture: ComponentFixture<FiltroTOTALVEHICULOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroTOTALVEHICULOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroTOTALVEHICULOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
