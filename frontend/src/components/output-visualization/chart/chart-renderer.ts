import * as d3 from 'd3';
import * as _ from 'underscore';
import { BoxPlotRenderer } from './box-plot-renderer';


export class ChartRenderer {

  private boxPlotRenderer: BoxPlotRenderer;

  constructor() {
    this.boxPlotRenderer = new BoxPlotRenderer();
  }

  public render(element: any, data: { name: string, values: [{ min: number, max: number, median: number }] }): void {
    let margin = { top: 30, right: 20, bottom: 70, left: 100 };
    let max = _.chain(data.values).max(x => x.max).value().max;
    let min = _.chain(data.values).min(x => x.min).value().min;
    let height = 600 - margin.top - margin.bottom;
    let barHeight = height;
    let width = 1200 - margin.left - margin.right;
    let deltaCorrection = (Math.abs(max - min) / 2) * 0.1;

    let y = d3.scaleLinear()
      .domain([max + deltaCorrection, min - deltaCorrection])
      .range([0, height]);
    let x = d3.scaleLinear()
      .domain([0, data.values.length])
      .range([0, width]);
    let barWidth = x(1) - x(0);
    let chart = d3.select(element)
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let bar = chart.selectAll('g')
      .data(data.values)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${x(i)}, 0)`);

    let that = this;
    bar.each(function (d: any) {
      let value: any = {};
      _.assign(value, d);

      that.boxPlotRenderer.render(d3.select(this), value, y, barWidth);
    });

    let xAxis = d3.axisBottom(x)
      .tickSizeInner(-height);
    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    let ticks = (max - min) / 1000;
    let yAxis = d3.axisLeft(y)
      .tickPadding(10)
      .tickSizeInner(-width)
      .ticks(ticks);
    chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

  }

  public reRender(): void {

  }

}