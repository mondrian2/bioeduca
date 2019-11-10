import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareConsultarComponent } from './software-consultar.component';

describe('SoftwareConsultarComponent', () => {
  let component: SoftwareConsultarComponent;
  let fixture: ComponentFixture<SoftwareConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
