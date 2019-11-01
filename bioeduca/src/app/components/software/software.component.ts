import { Component, OnInit } from '@angular/core';
import { SugestaoService } from '@app/_services/sugestao.service';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.less']
})
export class SoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
