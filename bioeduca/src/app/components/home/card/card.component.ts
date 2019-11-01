import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';


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

  constructor() { }

  ngOnInit() {
    console.log("nome", this.nome);
  }

  

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    console.log(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
