import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestaoListComponent } from './sugestao-list.component';

describe('SugestaoListComponent', () => {
  let component: SugestaoListComponent;
  let fixture: ComponentFixture<SugestaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
