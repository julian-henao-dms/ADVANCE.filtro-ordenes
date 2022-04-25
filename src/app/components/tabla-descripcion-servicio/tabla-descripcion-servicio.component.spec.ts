import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDescripcionServicioComponent } from './tabla-descripcion-servicio.component';

describe('TablaDescripcionServicioComponent', () => {
  let component: TablaDescripcionServicioComponent;
  let fixture: ComponentFixture<TablaDescripcionServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDescripcionServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDescripcionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
