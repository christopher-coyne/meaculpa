import React from 'react';
import {scaleLinear, max, scaleBand} from 'd3'

const BarChart = ({data, width, height}) => {
    const yScale = scaleLinear().domain([0, max(data.map(d => d.count))]).range([0, height-40])

    const xScale = scaleBand().domain(data.map(d=> d.name)).range([0, width])
    console.log('xscale bandwidth : ', xScale.bandwidth())
  return <svg width={width} height={height}>
      {data.map((d, i) => <rect width={xScale.bandwidth()} height={yScale(d.count)} y={height - yScale(d.count)} x={xScale.bandwidth() * i}/>)}
  </svg>;
};

export default BarChart;
