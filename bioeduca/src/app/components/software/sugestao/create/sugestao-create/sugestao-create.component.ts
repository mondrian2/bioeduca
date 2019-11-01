import { Component, OnInit } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService, AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-sugestao-create',
  templateUrl: './sugestao-create.component.html',
  styleUrls: ['./sugestao-create.component.less']
})
export class SugestaoCreateComponent implements OnInit {

  show: boolean
  msg: string
  users: any
  currentUser: User;

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private sugestServ: SugestaoService) { }
  
  onSubmit(sugestao: any){
    console.log('inserir', sugestao)
    // this.sugestServ.add(sugestao).subscribe(r=>{
    //   this.show = true;
    //   this.msg = 'Cadastro efetuado com sucesso'

    // });
  }

  sugestForm = new FormGroup({
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
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      this.sugestForm.get('indicadopor').setValue(this.currentUser.id)
    });
    this.show = false
    this.msg = ''
  }
}