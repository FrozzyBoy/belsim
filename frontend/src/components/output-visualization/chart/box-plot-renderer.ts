import * as d3 from 'd3';
import * as _ from 'underscore';

export class BoxPlotRenderer {
  public render(
    bar: d3.Selection<any, {}, null, undefined>,
    d: { min: number, max: number, median: number, height: number, width: number, minQuarter: number, maxQuarter: number },
    yScale: d3.ScaleLinear<number, number>,
    barWidth: number
  ): void {
    let correctionElementWidth = 10;
    let xCenter = barWidth / 2;
    let xStart = xCenter / 2;
    let xEnd = xCenter + xStart;

    this.addAllTextValues(
      bar,
      d,
      xStart,
      xEnd,
      yScale
    );

    this.addQuarter(
      bar,
      d,
      xCenter,
      yScale
    );

    let median = bar.selectAll('g.median-value')
      .data([d])
      .enter()
      .append('g')
      .classed('median-value', true)
      .classed('output-data__chart-median', true);

    median.append('rect')
      .attr('x', xStart)
      .attr('y', d => yScale(d.maxQuarter))
      .attr('width', xEnd - xStart)
      .attr('height', d => yScale(d.minQuarter) - yScale(d.maxQuarter));
  }

  private addQuarter(
    bar: d3.Selection<any, {}, null, undefined>,
    d: { min: number, max: number, median: number, height: number, width: number, minQuarter: number, maxQuarter: number },
    xCenter: number,
    yScale: d3.ScaleLinear<number, number>
  ): void {
    let quarterData = [{ val: d.max, quarterVal: d.maxQuarter }, { val: d.min, quarterVal: d.minQuarter }];
    if (d.min === d.max) {
      quarterData = [{ val: d.max, quarterVal: d.maxQuarter }];
    }

    bar.selectAll('g.quarter')
      .data(quarterData)
      .enter()
      .append('g')
      .classed('quarter', true)
      .append('line')
      .classed('output-data__chart-line', true)
      .classed('output-data__chart-line-dotted', true)
      .attr('y1', x => yScale(x.val))
      .attr('y2', x => yScale(x.quarterVal))
      .attr('x1', xCenter)
      .attr('x2', xCenter);
  }

  private addAllTextValues(
    bar: d3.Selection<any, {}, null, undefined>,
    d: { min: number, max: number, median: number, height: number, width: number, minQuarter: number, maxQuarter: number },
    xStart: number,
    xEnd: number,
    yScale: d3.ScaleLinear<number, number>
  ): void {
    let extremumsData: Array<number> = [];
    if (d.min === d.max) {
      extremumsData = [d.min];
    } else {
      extremumsData = _.values(d);
    }

    let extremumGroup = bar.selectAll('g.values')
      .data(extremumsData)
      .enter()
      .append('g')
      .classed('values', true)
      .attr('transform', y => `translate(0, ${yScale(y)})`);

    extremumGroup.append('line')
      .classed('output-data__chart-line', true)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('x1', xStart)
      .attr('x2', xEnd);
    extremumGroup.append('text')
      .classed('median-text', true)
      .attr('transform', y => `translate(${xEnd + 3}, 0)`)
      .text(x => x)
      .attr("font-family", "sans-serif")
      .attr("font-size", "8px");
  }

  public reRender(): void {

  }
}