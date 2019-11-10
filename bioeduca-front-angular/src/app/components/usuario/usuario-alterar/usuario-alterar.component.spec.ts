import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAlterarComponent } from './usuario-alterar.component';

describe('UsuarioAlterarComponent', () => {
  let component: UsuarioAlterarComponent;
  let fixture: ComponentFixture<UsuarioAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
