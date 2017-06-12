import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

let data = (require('./chart/data.json'));

import { ChartRenderer } from './chart/chart-renderer';

import * as d3 from 'd3';

@Component({
  selector: 'output-visualization',
  templateUrl: './output-visualization.tpl.html',
  styleUrls: ['./output-visualization.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OutputVisualizationComponent implements OnInit {
  private data: any[];
  public models: { id: number, name: string }[];
  public selectedModel: any;
  public chartRenderer: ChartRenderer;

  @ViewChild('chart') private chart: ElementRef;

  constructor(private http: Http) {
    this.models = [];
    this.selectedModel = <any>{};
    this.chartRenderer = new ChartRenderer();
  }

  public ngOnInit() {
    this.data = data.data;
    this.models = this.data.map((x: any, index: number) => {
      return {
        id: index,
        name: x.name
      };
    });
    this.selectedModel = {
      id: 0,
      name: this.data[0].name,
      values: this.data[0].values
    };
    this.chartRenderer.render(this.chart.nativeElement, this.selectedModel);
  }

  private modelChange(selectedIndex: number): void {
    this.selectedModel = {
      id: selectedIndex,
      name: this.data[selectedIndex].name,
      values: this.data[selectedIndex].values
    };
    this.drawAll();
  }

  private drawAll(): void {
    // drawAll(this.chart.nativeElement, this.selectedModel);
  }
}