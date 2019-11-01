import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ano-letivo',
  templateUrl: './ano-letivo.component.html',
  styleUrls: ['./ano-letivo.component.less']
})
export class AnoLetivoComponent implements OnInit {

  anos: any;

  constructor() {
    this.anos = ["2019" , "2019"];
   }

  ngOnInit() {
  }

}
