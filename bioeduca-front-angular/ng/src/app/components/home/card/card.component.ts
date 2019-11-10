import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { AvaliacaoService } from '@app/_services/avaliacao.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() nome: any
  @Input() site: any
  @Input() desenvolvedor: any
  @Input() anoletivo: any
  @Input() conteudo: any
  @Input() descricao: any
  @Input() rating: any
  @Input() instrucoesdeuso: any
  @Input() img: any
  @Input() id: any

  valor:any
  quant:any

  constructor(private _avaliacaoService: AvaliacaoService) { }

  getNota(n: any){
    this.valor = 0
    this.quant =  n.data.length
    n.data.forEach(e => {
      this.valor = this.valor + e.pontuacao
    });
  }

  ngOnInit() {
    this._avaliacaoService.getBySoftId(this.id)
    .subscribe(a => {
      this.getNota(a)
    })
  }

  

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  }

}
