import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.less']
})
export class ConteudoComponent implements OnInit {
  conteudo: any;

  constructor() { 
    this.conteudo = ["Oceano", "Amazonia", "Europa"];
  }

  ngOnInit() {
  }

}
