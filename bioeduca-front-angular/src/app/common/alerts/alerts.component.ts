import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {
  @Input() content: string

  constructor() { }

  ngOnInit() {
  }

}
