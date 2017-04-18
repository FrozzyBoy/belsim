import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';

let drawAll = require('./chart/box-plots').drawAll;

import * as d3 from 'd3';

@Component({
  selector: 'output-visualization',
  templateUrl: './output-visualization.tpl.html',
  styleUrls: ['./output-visualization.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OutputVisualizationComponent implements OnInit {
  @ViewChild('chart') private chart: ElementRef;

  public ngOnInit(): void {
    drawAll(this.chart.nativeElement);
  }
}