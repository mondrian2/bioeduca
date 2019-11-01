import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoLetivoComponent } from './ano-letivo.component';

describe('AnoLetivoComponent', () => {
  let component: AnoLetivoComponent;
  let fixture: ComponentFixture<AnoLetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnoLetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoLetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
