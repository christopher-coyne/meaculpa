import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lastDayOfDecade } from "date-fns";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, selected }) => {
  if (!data) {
    return <>Loading...</>;
  }
  console.log("selected : ", selected);
  const class_labels = [
    "Operating Systems",
    "Intro to Databases",
    "Analysis of Algorithms",
    "Artificial Intelligence",
    "UI Design",
  ];
  // console.log('bar data : ', data['operating systems i']['hard']/data['operating systems i']['total'])

  const datasets = [
    {
      label: "courses",
      data: [
        data["operating systems i"][selected] /
          data["operating systems i"]["total"],
        data["introduction to databases"][selected] /
          data["introduction to databases"]["total"],
        data["analysis of algorithms i"][selected] /
          data["analysis of algorithms i"]["total"],
        data["artificial intelligence"][selected] /
          data["artificial intelligence"]["total"],
        data["user interface design"][selected] /
          data["user interface design"]["total"],
      ],
      backgroundColor: ["#003f5c", "#3d708f", "#6996b3", "#94bed9", "#c1e7ff"],
    },
  ];
  return (
    <Bar
      data={{ labels: class_labels, datasets: datasets }}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `No. Per Review ${context.formattedValue}`;
              },
            },
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Occurences per review",
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 5,
            },
          },
          x: {
            title: {
              display: false,
              text: "Course",
            },
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: "lato",
                size: "14px",
              },
            },
          },
        },
      }}
    />
  );
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
