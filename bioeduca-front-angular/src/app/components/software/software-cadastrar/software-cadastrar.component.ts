import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '@app/_services';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-software-cadastrar',
  templateUrl: './software-cadastrar.component.html',
  styleUrls: ['./software-cadastrar.component.less']
})
export class SoftwareCadastrarComponent implements OnInit {

  show: boolean
  msg: string
  users: any
  currentUser: User;
  conteudo: any;
  formGroup = this.fb.group({
    file: [null, Validators.required]
  });
  sugestForm: FormGroup
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private authenticationService: AuthenticationService,
    private sugestServ: SugestaoService,
    private formBuilder: FormBuilder,
  ) { }

  /*
    auxilia o upload de imagem
    seta o arquivo no formulário para envio
  */

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.sugestForm.controls.img.setValue(reader.result)
        this.cd.markForCheck();
      };
    }
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

  /*
    Valida os dados do formulário
    envia para inclusão na base por meio do serviço
  */

  onSubmit(sugestao: any) {
    this.submitted = true;
    if (this.sugestForm.invalid) {
        return;
    }
    this.sugestServ.add(sugestao).subscribe(r => {
      this.show = true;
      this.msg = 'Cadastro efetuado com sucesso'

    });
  }

  /*
    Simplifica o chamado às propriedades do formulário
    de sugestões.
  */

  get f() { return this.sugestForm.controls; }
  
  /*
    Instancia o formulário e os requisitos para validação
    Carrega todos os dados da sugestão persistidos na base para posterior adição
    Busca usuário logado para alimentar o campo id do formulário
  */
  ngOnInit() {
    this.sugestForm = this.formBuilder.group({
        indicadopor: ['', Validators.required],
        nome: ['', Validators.required],
        site: ['', Validators.required],
        desenvolvedor: ['', Validators.required],
        anoletivo: ['', Validators.required],
        conteudo: ['', Validators.required],
        descricao: ['', Validators.required],
        intrucoesdeuso: ['', Validators.required],
        img: ['', Validators.required],
    });
    
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      this.sugestForm.controls.indicadopor.setValue(this.currentUser.id)
    });
    this.show = false
    this.msg = ''

    
  }
}