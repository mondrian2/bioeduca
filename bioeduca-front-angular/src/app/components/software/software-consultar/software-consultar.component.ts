import { Component, OnInit } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { User } from '@app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from '@app/_services/avaliacao.service';
import { AuthenticationService } from '@app/_services/authentication.service';
import { PendenciaService } from '@app/_services/pendencia.service';


@Component({
  selector: 'app-software-consultar',
  templateUrl: './software-consultar.component.html',
  styleUrls: ['./software-consultar.component.less']
})
export class SoftwareConsultarComponent implements OnInit {

  myIndications: any
  software_id: any
  currentUser: User;
  avaliacao: any
  showLink: any
  showAvaliar: any
  pendencia: any

  constructor(
    private sugestServ: SugestaoService,
    private route: ActivatedRoute,
    private _avaliacaoService: AvaliacaoService,
    private _authenticationService: AuthenticationService,
    private _pendenciaService: PendenciaService    
    ) {}

  /*
    Busca todas as indicações existentes na base
    para o id solicitado
  */

  getIndicatios(id: any){
    this.sugestServ.getById(id)
    .subscribe(i => {
      this.myIndications = i
    })
  }

  /*
    Controla a exibição dos links de avaliação
  */

  exibeLInks(userId: any){
    this.showLink = false
    this.showAvaliar = false

    this._pendenciaService.getByUser(userId)
    .subscribe(p => {
      this.pendencia =  p
      if (this.pendencia.data.length > 0){
        this.showAvaliar = true
      }else{
        this.showLink = true
      }
    })
  }

  /*
    Cria um onjeto pendencia
    Envia para inclusão na base por meio do serviço
  */

  gerarPendenca(id: any, nome: any){
    this._pendenciaService.add({
      "user_id": this.currentUser.id,
      "user_name": this.currentUser.nome,
      "software_id": id,
      "software_nome": nome
    }).subscribe(p => { 
      this.ngOnInit()
    })
  
  }

  /*
    Busca todas as avaiações
    exitentes na base filtrados pelo id
  */

  getAvaliacao(id: any){
    this._avaliacaoService.getBySoftId(id)
    .subscribe(a => this.avaliacao = a)
  }

  /*
    Busca o id enviado pela rota
    Busca as indicações por id
    Busca as avaliações por id
    Seta a variável com o usuário logado
  */
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.software_id = params.get('id')
      this.getIndicatios(params.get('id'))
      this.getAvaliacao(params.get('id'))
    })

    this._authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      this.exibeLInks(this.currentUser.id)
    })
  }

}
