import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareMeusSugeridosComponent } from './software-meus-sugeridos.component';

describe('SoftwareMeusSugeridosComponent', () => {
  let component: SoftwareMeusSugeridosComponent;
  let fixture: ComponentFixture<SoftwareMeusSugeridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareMeusSugeridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareMeusSugeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
