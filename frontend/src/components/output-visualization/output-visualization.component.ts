import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

let drawAll = require('./chart/box-plots').drawAll;

import * as d3 from 'd3';

@Component({
  selector: 'output-visualization',
  templateUrl: './output-visualization.tpl.html',
  styleUrls: ['./output-visualization.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OutputVisualizationComponent implements OnInit {
  private data: any[];
  private models: { id: number, name: string }[];
  private selectedModel: any;

  @ViewChild('chart') private chart: ElementRef;

  constructor(private http: Http) {
    this.models = [];
    this.selectedModel = <any>{};
  }

  public async ngOnInit() {
    let originData: any = await this.http.get('http://localhost:3000/api/results/1').toPromise();
    this.data = JSON.parse(originData._body).data;
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
    this.drawAll();
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
    drawAll(this.chart.nativeElement, this.selectedModel);
  }
}