import { Component } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent {

  sistema: any
  users: any;
  conteudo: any;
  sugestForm: FormGroup

  constructor(private sugestServ: SugestaoService, private formBuilder: FormBuilder, ) { }

  getSistema() {
    this.sugestServ.getAll()
      .subscribe(s => {
        this.sistema = s;
      });
  }

  setConteudo() {
    switch (this.sugestForm.get('anoletivo').value) {
      case "1":
        this.conteudo = {
          '1': 'Origem da Vida',
          '2': 'Bioquímica Celular',
          '3': 'Citologia',
          '4': 'Embriologia'
        }

        break;
      case "2":
        this.conteudo = {
          '1': 'Biodiversidade dos Seres Vivos',
          '2': 'Anatomia e Fisiologia Humana',
          '3': 'Homeostase',
          '4': 'Embriologia'
        }

        break;
      case "3":
        this.conteudo = {
          '1': 'Genética',
          '2': 'Evolução',
          '3': 'Ecologia',
        }

        break;

      default:
        break;
    }
  }


  onSubmit(sugestao: any) {
    this.sugestServ.getFilter(this.sugestForm.value.anoletivo, this.sugestForm.value.conteudo)
      .subscribe(r => {
        this.sistema = r
      });
  }


  ngOnInit() {
    this.sugestForm = this.formBuilder.group({
      anoletivo: ['', Validators.required],
      conteudo: ['', Validators.required],
    });
    this.getSistema();
  }
}