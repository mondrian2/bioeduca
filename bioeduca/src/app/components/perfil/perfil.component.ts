import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';

import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.less']
})
export class PerfilComponent implements OnInit {
  
  currentUser: User;

  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    console.log(this.currentUser)
  }

}
