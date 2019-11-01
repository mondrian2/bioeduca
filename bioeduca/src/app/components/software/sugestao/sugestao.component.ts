import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SugestaoService } from '@app/_services/sugestao.service';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.less']
})
export class SugestaoComponent implements OnInit {

  show: boolean
  msg: string

  constructor(private sugestServ: SugestaoService) { }
  
  onSubmit(sugestao: any){
    this.sugestServ.add(sugestao).subscribe(r=>{
      this.show = true;
      this.msg = 'Cadastro efetuado com sucesso'

    });
  }

  sugestForm = new FormGroup({
    nome: new FormControl(),
    site: new FormControl(),
    desenvolvedor: new FormControl(),
    anoletivo: new FormControl(),
    conteudo: new FormControl(),
    descricao: new FormControl(),
    intrucoesdeuso: new FormControl(),
  })

  ngOnInit() {
    this.show = false
    this.msg = ''
  }

}
