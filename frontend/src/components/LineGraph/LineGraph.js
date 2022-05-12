import React from 'react';
import AxisBottom from '../AxisBottom/AxisBottom'
import { csv, scaleLinear, scaleOrdinal, max, format, extent} from 'd3'

const width = 960;
const height = 500;

const xMargin = 200;
const yMargin = 200;

const innerHeight = height - margin.top - margin.bottom

const LineGraph = ({data}) => {
    // data is rom 1999 to 2021
    const xScale = scaleLinear().domain([1999, 2021]).range([0, innerWidth]).nice()
  return (<svg width={500} height={500}>
      <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} tickOffset={5}/>
      </g>
      
  </svg>);
};

export default LineGraph;
