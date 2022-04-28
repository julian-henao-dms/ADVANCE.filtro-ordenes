import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTallerComponent } from './orden-taller.component';

describe('OrdenTallerComponent', () => {
  let component: OrdenTallerComponent;
  let fixture: ComponentFixture<OrdenTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenTallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
