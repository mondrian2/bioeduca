import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestaoCreateComponent } from './sugestao-create.component';

describe('SugestaoCreateComponent', () => {
  let component: SugestaoCreateComponent;
  let fixture: ComponentFixture<SugestaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
