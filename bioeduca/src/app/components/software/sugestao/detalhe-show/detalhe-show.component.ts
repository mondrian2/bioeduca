import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SugestaoService } from '@app/_services/sugestao.service';

@Component({
  selector: 'app-detalhe-show',
  templateUrl: './detalhe-show.component.html',
  styleUrls: ['./detalhe-show.component.less']
})
export class DetalheShowComponent implements OnInit {
 software: any
  constructor(private route: ActivatedRoute, private sugestServ: SugestaoService,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.sugestServ.getById(params.get('id'))
      .subscribe(s =>{
        console.log(s)
        this.software = s
      })
    })
  }

}
