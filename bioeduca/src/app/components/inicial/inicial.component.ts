import { Component } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';

@Component({ templateUrl: 'inicial.component.html' })

export class InicialComponent {
    sistema: any
    users: any;

    constructor(private sugestServ: SugestaoService) { }

    getSistema(){
        this.sugestServ.getAll()
        .subscribe(s => {
          this.sistema = s;
        });
      }

    ngOnInit() {
        this.getSistema();
    }
}