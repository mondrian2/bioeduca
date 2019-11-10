import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-usuario-consultar',
  templateUrl: './usuario-consultar.component.html',
  styleUrls: ['./usuario-consultar.component.less']
})
export class UsuarioConsultarComponent implements OnInit {

  currentUser: User;

  /*
    Busca usuário logado
    prepara os dados para exibição
  */

  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {}

}
