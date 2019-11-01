import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheShowComponent } from './detalhe-show.component';

describe('DetalheShowComponent', () => {
  let component: DetalheShowComponent;
  let fixture: ComponentFixture<DetalheShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
