import { Component, OnInit } from '@angular/core';
import { PendenciaService } from '@app/_services/pendencia.service';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({
  selector: 'app-pendencia',
  templateUrl: './pendencia.component.html',
  styleUrls: ['./pendencia.component.less']
})
export class PendenciaComponent implements OnInit {

  pendencia: any
  currentUser: any

  constructor(
    private _pendenciaService: PendenciaService,
    private authenticationService: AuthenticationService,

  ) { }

  /*
    Busca o usuário logado
    Busca todas as pendências do usuario logado
  */

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      this._pendenciaService.getByUser(this.currentUser.id).subscribe(p =>{
        this.pendencia = p
        if(this.pendencia.data.length == 0){
          this.pendencia = null
        }
      })
    });

  }

}
