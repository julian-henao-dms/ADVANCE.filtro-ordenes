import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTallerAltComponent } from './orden-taller-alt.component';

describe('OrdenTallerAltComponent', () => {
  let component: OrdenTallerAltComponent;
  let fixture: ComponentFixture<OrdenTallerAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenTallerAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTallerAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
