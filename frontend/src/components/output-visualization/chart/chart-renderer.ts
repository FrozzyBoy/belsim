import * as d3 from 'd3';
import * as _ from 'underscore';

export class ChartRenderer {

  public render(element: any, data: { name: string, values: [{ min: number, max: number, median: number }] }): void {
    let max = _.chain(data.values).max(x => x.max).value().max;
    let min = _.chain(data.values).min(x => x.min).value().min;
    let height = 480;
    let width = 1000;
    let x = d3.scaleBand()
      .range([0, data.values.length])
      .padding(.1);
    let barWidth = x.bandwidth();
    let y = d3.scaleLinear()
      .range([min, max]);

    let chart = d3.select(element)
      .attr('width', width)
      .attr('height', height);

    let bar = d3.selectAll('g')
      .data(data.values)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)

    bar.append('rect')
      .attr('y', d => y(d.median))
      .attr('height', '10px')
      .attr('width', '20px');
  }

  public reRender(): void {

  }

}