import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestaoComponent } from './sugestao.component';

describe('SugestaoComponent', () => {
  let component: SugestaoComponent;
  let fixture: ComponentFixture<SugestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
