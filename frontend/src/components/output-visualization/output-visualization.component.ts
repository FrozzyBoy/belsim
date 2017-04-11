import {
  Component,
  OnInit
} from '@angular/core';

let drawAll = require('./drawer').drawAll;

import * as d3 from 'd3';

@Component({
  selector: 'output-visualization',
  templateUrl: './output-visualization.tpl.html',
  styleUrls: ['./output-visualization.component.css']
})
export class OutputVisualizationComponent implements OnInit {
  public ngOnInit(): void {
    drawAll();
    // let containerSelector = "#output-visialization";
    // initGraph(containerSelector);
  }
}

// function initGraph(selector: string) {
// }