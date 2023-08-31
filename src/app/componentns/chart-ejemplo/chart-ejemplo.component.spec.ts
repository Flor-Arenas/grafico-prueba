import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEjemploComponent } from './chart-ejemplo.component';

describe('ChartEjemploComponent', () => {
  let component: ChartEjemploComponent;
  let fixture: ComponentFixture<ChartEjemploComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartEjemploComponent]
    });
    fixture = TestBed.createComponent(ChartEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
