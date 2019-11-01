import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestaoEditComponent } from './sugestao-edit.component';

describe('SugestaoEditComponent', () => {
  let component: SugestaoEditComponent;
  let fixture: ComponentFixture<SugestaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
