import { Component, OnChanges, Input } from '@angular/core';
import * as d3 from 'd3';
import { BarGraphData } from 'src/app/Interfaces/bar-graph-data';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnChanges {
  @Input() data: Array<BarGraphData> = [];
  private svg;
  private margin = 100;
  private width = 850 - this.margin * 2;
  private height = 400 - this.margin * 2;

  constructor() {}

  ngOnChanges(): void {
    if (this.data.length) {
      this.createSvg();
      this.drawBars(this.data);
    }
  }

  private createSvg(): void {
    d3.select('svg').remove();
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    data = data.map((item) => {
      item.date = d3.timeParse('%Y-%m-%d')(item.date);
      return item;
    });
    // Create the X-axis band scale
    const x = d3
      .scaleTime()
      .domain([data[0].date, data[data.length - 1].date])
      .range([0, this.width]);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x).ticks(10))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.totalCases),
        d3.max(data, (d) => d.totalCases),
      ])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.date))
      .attr('y', (d) => y(d.totalCases))
      .attr('width', 1)
      .attr('height', (d) => this.height - y(d.totalCases))
      .attr('fill', '#a3001e');
  }
}
