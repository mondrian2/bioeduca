import { Component, OnInit } from '@angular/core';
import { QuestoesService } from '@app/_services/questoes.service';
import { FormGroup, FormBuilder, Validators, SelectControlValueAccessor } from '@angular/forms';
import { AuthenticationService } from '@app/_services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from '@app/_services/avaliacao.service';
import { SugestaoService } from '@app/_services/sugestao.service';
import { PendenciaService } from '@app/_services/pendencia.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.less']
})
export class AvaliacaoComponent implements OnInit {
  software: any
  questoes: any
  avaliacaoForm: FormGroup
  total: any
  media: any
  avaliacao: any
  show: boolean
  msg: string
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  currentUser: any
  currentSoftware: any


  constructor(
    private _avaliacaoService: AvaliacaoService,
    private _questoesService: QuestoesService,
    private _sugestaoService: SugestaoService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private _pendencia: PendenciaService

  ) { }

  /*
    Valida os dados do formulário
    Envia dos dados do formulário para adição pelo serviço
    Remove pendência para o id do usuário pelo serviço
  */

  onSubmit(avaliacao: any) {
    this.submitted = true;
    if (this.avaliacaoForm.invalid) {
      this.show = true;
      this.msg = 'Precisa responder a todas as perguntas!'
      return;
    }
    this._avaliacaoService.add(avaliacao).subscribe(r => {
      this.show = true;

      this.msg = 'Avaliação concluida com sucesso'

      this._pendencia.removeBySoftware_id(this.currentSoftware.get('id'))


    });
  }


  setarNota(n: any) {
    this.show = false;
    this.total = this.total + n
    if (this.total > 0) {
      this.media = this.total / 12
    }
    this.f.pontuacao.setValue(this.media)
  }

  get f() { return this.avaliacaoForm.controls; }


  ngOnInit() {
    this._questoesService.getAll()
      .subscribe(q => {
        this.questoes = q
      })

    this.total = 0
    this.media = 0
    this.show = false
    this.msg = ''

    this.avaliacaoForm = this.formBuilder.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required],
      comentario: ['', Validators.required],
      pontuacao: ['', Validators.required],
      usuario: ['', Validators.required],
      nome: ['', Validators.required],
      software: ['', Validators.required],
    });

    this.route.paramMap.subscribe(params => {
      this.currentSoftware = params
      this.f.software.setValue(this.currentSoftware.get('id'))
      this._sugestaoService.getById(this.currentSoftware.get('id'))
        .subscribe(s => this.software = s)
    })


    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      this.f.usuario.setValue(this.currentUser.id)
      this.f.nome.setValue(this.currentUser.nome)
    });



  }

}
