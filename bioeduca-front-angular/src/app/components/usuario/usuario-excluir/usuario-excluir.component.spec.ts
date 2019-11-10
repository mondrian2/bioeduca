import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioExcluirComponent } from './usuario-excluir.component';

describe('UsuarioExcluirComponent', () => {
  let component: UsuarioExcluirComponent;
  let fixture: ComponentFixture<UsuarioExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
