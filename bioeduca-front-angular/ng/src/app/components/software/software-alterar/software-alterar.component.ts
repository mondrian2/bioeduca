import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '@app/_services';
import { User } from '@app/_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-software-alterar',
  templateUrl: './software-alterar.component.html',
  styleUrls: ['./software-alterar.component.less']
})
export class SoftwareAlterarComponent implements OnInit {

  show: boolean
  msg: string
  users: any
  currentUser: User;
  conteudo: any;
  formGroup = this.fb.group({
    file: [null, Validators.required]
  });
  sugestForm: FormGroup
  _sugestForm: any
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
    private route: ActivatedRoute,
  ) { }


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
    Submete o objeto segestão
    para atualização na base pelo serviço
  */

  onSubmit(sugestao: any) {
    this.submitted = true;
    this.sugestServ.update(this.sugestForm.value._id,this.sugestForm.value)
    .subscribe(r=>{
      this.show = true;
      this.msg = 'Cadastro atualizado com sucesso'
    });
  }

  /*
    Simplifica o chamado às propriedades do formulario
    de sugestões.
  */

  get f() { return this.sugestForm.controls; }
  
  /*
    Instancia o formulário e os requisitos para validação
    Carrega todos os dados da sugestão persistidos na base para posterior alteração
    Busca usuário logado para alimentar o campo id do formulário
  */

  ngOnInit() {
    this.sugestForm = this.formBuilder.group({
        _id: ['', Validators.required],
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

    this.route.paramMap.subscribe(params => {
      this.sugestServ.getById(params.get('id'))
      .subscribe(r => {

        this._sugestForm = r
        this.f._id.setValue(this._sugestForm._id)
        this.f.indicadopor.setValue(this._sugestForm.indicadopor)
        this.f.nome.setValue(this._sugestForm.nome)
        this.f.site.setValue(this._sugestForm.site)
        this.f.desenvolvedor.setValue(this._sugestForm.desenvolvedor)
        this.f.anoletivo.setValue(this._sugestForm.anoletivo)
        this.f.descricao.setValue(this._sugestForm.descricao)
        this.f.intrucoesdeuso.setValue(this._sugestForm.intrucoesdeuso)
        this.f.img.setValue(this._sugestForm.img)

      })
    })      
    
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      this.sugestForm.controls.indicadopor.setValue(this.currentUser.id)
    });
    
    this.show = false
    this.msg = ''

    
  }
}