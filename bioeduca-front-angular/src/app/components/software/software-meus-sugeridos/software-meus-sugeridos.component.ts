import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { SugestaoService } from '@app/_services/sugestao.service';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-software-meus-sugeridos',
  templateUrl: './software-meus-sugeridos.component.html',
  styleUrls: ['./software-meus-sugeridos.component.less']
})
export class SoftwareMeusSugeridosComponent implements OnInit {

  myIndications: any
  users: any
  currentUser: User;

  constructor(
    private sugestServ: SugestaoService,
    private authenticationService: AuthenticationService,
    
    ) {}

  /*
    Busca todas as indicações
    exitentes na base filtrados pelo id
  */

  getIndicatios(id: any){
    this.sugestServ.getIndication(id)
    .subscribe(i => {
      this.myIndications = i
    })
  }

 
  remove(id: any){
    this.sugestServ.remove(id)
    .subscribe(r => this.getIndicatios(this.currentUser.id))
  }

  /*
    Busca usuário corrente 
    Busca indicações por usuário
  */
 
  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.getIndicatios(this.currentUser.id);
    });
  }

}
