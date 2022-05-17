import React from 'react';
import {scaleLinear, max, scaleBand} from 'd3'
import styles from './BarChart.module.css'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

/*
const BarChart = ({data, width, height, margins}) => {
    const innerHeight = height - margins.top - margins.bottom
    const innerWidth = width - margins.left - margins.right
    const yScale = scaleLinear().domain([0, max(data.map(d => parseFloat(d.count)))]).range([0, innerHeight-40])

    const xScale = scaleBand().domain(data.map(d=> d.name)).range([0, innerWidth]).padding(.15)
    console.log('xscale bandwidth : ', xScale.bandwidth())
    console.log('y ticks : ', yScale.ticks())
  return <svg width={`70%`} className={styles.chart} viewBox="0 0 900 500">
    <g transform={`translate(${margins.left}, ${margins.top})`}>
    {yScale.ticks().map(tickValue => (
        <g key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
        <line x1={15} x2={innerWidth} y1={-3} y2={-3} stroke="black"/>
        <text style={{textAnchor:"middle"}}>{tickValue}</text>
        </g>
      ))}
      {xScale.domain().map(tickValue => (
        <g key={tickValue} transform={`translate(${xScale(tickValue) + (xScale.bandwidth() / 2)},${innerHeight + 20})`}>
        <text style={{textAnchor:"middle"}}>{tickValue}</text>
        </g>
      ))}
      {data.map((d, i) => <rect key={i} width={xScale.bandwidth()}  height={yScale(d.count)} y={innerHeight - yScale(d.count) - 20} x={xScale(d.name)}/>)}
    </g>
  </svg>;
};

export default BarChart;
*/

const labels = [1999, 2000, 2001, 2002, 2003]

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({data, selected}) => {
  if (!data) {
    return (<>Loading...</>)
  }
  console.log('selected : ', selected)
  const class_labels = ['Operating Systems', 'Intro to Databases', 'Programming Langs and Translators', 'Analysis of Algorithms', 'Artificial Intelligence', 'User Interface Design']
  // console.log('bar data : ', data['operating systems i']['hard']/data['operating systems i']['total'])

  const datasets = [{
    label: 'courses',
    data: [data['operating systems i'][selected]/data['operating systems i']['total'], data['introduction to databases'][selected]/data['introduction to databases']['total'], data['programming languages and translators'][selected]/data['programming languages and translators']['total'], data['analysis of algorithms i'][selected]/data['analysis of algorithms i']['total'], data['artificial intelligence'][selected]/data['artificial intelligence']['total'], data['user interface design'][selected]/data['user interface design']['total']],
    backgroundColor: ['red', 'orange', 'blue', 'gray', 'black', 'purple']
  }]
  return (
  <Bar data={{labels: class_labels, datasets: datasets}}
  options = {{
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Occurences per review',
        }
      },
      x: {
        title: {
          display: true,
          text: 'Course',
        }
      }
    }
  }}
  />
  )
};

export default BarChart;

/*
  return (
  <Bar data={{labels: labels, datasets: datasets}}
  options = {{
    responsive: true,
    maintainAspectRatio: true,
  }}
  />
  )
};
*/
