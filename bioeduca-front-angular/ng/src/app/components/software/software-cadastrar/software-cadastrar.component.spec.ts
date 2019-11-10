import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCadastrarComponent } from './software-cadastrar.component';

describe('SoftwareCadastrarComponent', () => {
  let component: SoftwareCadastrarComponent;
  let fixture: ComponentFixture<SoftwareCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
