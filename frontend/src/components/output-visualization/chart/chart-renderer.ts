import * as d3 from 'd3';
import * as _ from 'underscore';
import { BoxPlotRenderer } from './box-plot-renderer';


export class ChartRenderer {

  private boxPlotRenderer: BoxPlotRenderer;

  constructor() {
    this.boxPlotRenderer = new BoxPlotRenderer();
  }

  public render(
    element: any,
    data: { name: string, values: [{ min: number, max: number, median: number }] }
  ): void {
    let margin = { top: 30, right: 20, bottom: 70, left: 100 };
    let maxValue = _.chain(data.values).max(x => x.max).value().max;
    let minValue = _.chain(data.values).min(x => x.min).value().min;
    let height = 600 - margin.top - margin.bottom;
    let barHeight = height;
    let chartWidth = Math.max(element.parentElement.offsetWidth, 1000);
    let width = chartWidth - margin.left - margin.right;

    let deltaCorrection = (Math.abs(maxValue - minValue) / 2) * 0.1;
    let higherBorderValue = maxValue + deltaCorrection;
    let lowerBorderValue = minValue - deltaCorrection;

    let yScale = d3.scaleLinear()
      .domain([higherBorderValue, lowerBorderValue])
      .range([0, height]);
    let xScale = d3.scaleLinear()
      .domain([0, data.values.length])
      .range([0, width]);

    let svg = d3.select(element)
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right);
    let chart = svg.append("g")
      .classed('chart-wrapper', true)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .append('g');

    let bar = chart.selectAll('g')
      .data(data.values)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${xScale(i)}, 0)`);

    let barWidth = xScale(1) - xScale(0);
    let that = this;
    bar.each(function (d: any) {
      let value: any = {};
      _.assign(value, d);

      that.boxPlotRenderer.render(d3.select(this), value, yScale, barWidth);
    });

    let xAxis = d3.axisBottom(xScale)
      .tickSizeInner(-height);
    let gX = chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    let ticks = higherBorderValue - lowerBorderValue;
    if (ticks < 100) {
      ticks *= 1000000;
    }
    ticks = +String(ticks).substring(0, 2);
    let yAxis = d3.axisLeft(yScale)
      .tickPadding(10)
      .tickSizeInner(-width)
      .ticks(ticks);
    let gY = chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

    let transform = d3.zoomIdentity;
    svg.call(d3.zoom()
      .scaleExtent([1 / 2, 8])
      .on("zoom", zoomed));

    function zoomed() {
      chart.attr("transform", d3.event.transform);
    }
  }

  public reRender(element: any, data: { name: string, values: [{ min: number, max: number, median: number }] }): void {
    d3.select(element).selectAll('*').remove();
    this.render(element, data);
  }

}