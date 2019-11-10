import { Component, OnInit } from '@angular/core';
import { QuestoesService } from '@app/_services/questoes.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.less']
})
export class QuestoesComponent implements OnInit {

  questoes: any

  constructor( private _questoesService: QuestoesService) { }

  /*
    Busca todas as questões
    na base de dados por meio do serviço
  */

  ngOnInit() {
    this._questoesService.getAll()
    .subscribe(q => {
      this.questoes = q
    })
  }

}
