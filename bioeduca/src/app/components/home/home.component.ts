import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '@app/_services';
import { SugestaoService } from '@app/_services/sugestao.service';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent {
    sistema: any
    loading = false;
    users: any;

    constructor(private userService: UserService, private sugestServ: SugestaoService) { }

    getSistema(){
        this.sugestServ.getAll()
        .subscribe(s => {
          this.sistema = s;
        });
      }

    ngOnInit() {
        this.getSistema();
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}