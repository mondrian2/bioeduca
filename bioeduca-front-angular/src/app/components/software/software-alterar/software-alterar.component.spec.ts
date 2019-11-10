import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareAlterarComponent } from './software-alterar.component';

describe('SoftwareAlterarComponent', () => {
  let component: SoftwareAlterarComponent;
  let fixture: ComponentFixture<SoftwareAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
