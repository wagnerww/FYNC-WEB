import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEsportesComponent } from './cadastro-esportes.component';

describe('CadastroEsportesComponent', () => {
  let component: CadastroEsportesComponent;
  let fixture: ComponentFixture<CadastroEsportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEsportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEsportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
