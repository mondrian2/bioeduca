import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { SugestaoService } from '@app/_services/sugestao.service';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-sugestao-list',
  templateUrl: './sugestao-list.component.html',
  styleUrls: ['./sugestao-list.component.less']
})
export class SugestaoListComponent implements OnInit {
  myIndications: any
  users: any
  currentUser: User;

  constructor(
    private sugestServ: SugestaoService,
    private authenticationService: AuthenticationService,
    
    ) {}

  getIndicatios(id: any){
    this.sugestServ.getIndication(id)
    .subscribe(i => {
      console.log('indications', i)
      this.myIndications = i
    })
  }

  remove(id: any){
    console.log('remover', id)
    this.sugestServ.remove(id)
    .subscribe(r => this.getIndicatios(this.currentUser.id))
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.getIndicatios(this.currentUser.id);
    });
  }

}
