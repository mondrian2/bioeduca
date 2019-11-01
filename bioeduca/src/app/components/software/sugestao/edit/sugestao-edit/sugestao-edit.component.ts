import { Component, OnInit, Input } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/_models/user';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({
  selector: 'app-sugestao-edit',
  templateUrl: './sugestao-edit.component.html',
  styleUrls: ['./sugestao-edit.component.less']
})
export class SugestaoEditComponent implements OnInit {


  show: boolean
  msg: string
  sugest: any

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private sugestServ: SugestaoService, ) {}
  currentUser: User;

  onSubmit(){
    console.log(this.sugestForm.value._id)
    this.sugestServ.update(this.sugestForm. value._id,this.sugestForm.value)
    .subscribe(r=>{
      this.show = true;
      this.msg = 'Cadastro atualizado com sucesso'
    });
  }

  sugestForm = new FormGroup({
    _id: new FormControl(),
    nome: new FormControl(),
    site: new FormControl(),
    desenvolvedor: new FormControl(),
    anoletivo: new FormControl(),
    conteudo: new FormControl(),
    descricao: new FormControl(),
    intrucoesdeuso: new FormControl(),
    img: new FormControl(),
    indicadopor: new FormControl(),
  })

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.show = false
    this.msg = ''
    this.route.paramMap.subscribe(params => {
      this.sugestServ.getById(params.get('id'))
      .subscribe(s => {
        this.sugest = s;
        this.sugestForm.get('_id').setValue(this.sugest._id)
        this.sugestForm.get('nome').setValue(this.sugest.nome)
        this.sugestForm.get('site').setValue(this.sugest.site)
        this.sugestForm.get('desenvolvedor').setValue(this.sugest.desenvolvedor)
        this.sugestForm.get('anoletivo').setValue(this.sugest.anoletivo)
        this.sugestForm.get('conteudo').setValue(this.sugest.conteudo)
        this.sugestForm.get('descricao').setValue(this.sugest.descricao)
        this.sugestForm.get('intrucoesdeuso').setValue(this.sugest.intrucoesdeuso)
        this.sugestForm.get('img').setValue(this.sugest.img)
        this.sugestForm.get('indicadopor').setValue(this.sugest.indicadopor)
      })
    });
    
  }

}
