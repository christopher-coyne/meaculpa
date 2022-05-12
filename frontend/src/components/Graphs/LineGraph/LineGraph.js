import React from 'react';
import { csv, scaleTime, timeFormat, scaleOrdinal, max, format, extent} from 'd3'
import AxisBottom from '../components/AxisBottom/AxisBottom.js'
import styles from './LineGraph.module.css'

const width = 960;
const height = 500;

const xMargin = 200;
const yMargin = 200;

const mydata = [
    {year: '1999', reviews: '10'},
    {year: '2000', reviews: '13'},
    {year: '2001', reviews: '19'},
    {year: '2002', reviews: '21'},
    {year: '2003', reviews: '54'},
    {year: '2004', reviews: '32'},
    {year: '2005', reviews: '67'},
    {year: '2006', reviews: '77'},
    {year: '2007', reviews: '79'},
    {year: '2008', reviews: '75'},
    {year: '2009', reviews: '82'},
    {year: '2010', reviews: '89'},
    {year: '2011', reviews: '100'},
    {year: '2012', reviews: '101'},
    {year: '2013', reviews: '103'},
    {year: '2014', reviews: '97'},
    {year: '2015', reviews: '91'},
    {year: '2016', reviews: '65'},
    {year: '2017', reviews: '78'},
    {year: '2018', reviews: '34'},
    {year: '2019', reviews: '15'},
    {year: '2020', reviews: '18'},
    {year: '2021', reviews: '18'},
]

const LineGraph = ({data}) => {
    // data is rom 1999 to 2021
    const xScale = scaleTime().domain([1999, 2021]).range(800)
    const xAxisTickFormat = timeFormat('%Y')

  return (<svg width={500} height={500} className={styles.container}>
      <g transform={`translate(150,0)`}>
          <AxisBottom xScale={xScale} tickFormat={xAxisTickFormat} tickOffset={3}/>
      </g>
      
  </svg>);
};

export default LineGraph;