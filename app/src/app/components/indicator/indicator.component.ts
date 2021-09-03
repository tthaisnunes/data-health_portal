import { Component, Input, OnInit } from '@angular/core';
import Indicator from './indicator.model';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {
  @Input() indicator: Indicator;

  constructor() { }

  ngOnInit(): void {
  }

}
