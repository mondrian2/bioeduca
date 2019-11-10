import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCadastrarComponent } from './usuario-cadastrar.component';

describe('UsuarioCadastrarComponent', () => {
  let component: UsuarioCadastrarComponent;
  let fixture: ComponentFixture<UsuarioCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
