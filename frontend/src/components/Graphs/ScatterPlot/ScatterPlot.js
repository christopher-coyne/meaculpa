import React from 'react';
import {scaleLinear, max, scaleBand} from 'd3'
import styles from './ScatterPlot.module.css'
import 'chartjs-adapter-date-fns'
import { enUS } from 'date-fns/locale'
import { Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  TimeScale,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    TimeScale,
  );

const LineGraph = ({data}) => {

  if (!data) {
    return (<>Loading...</>)
  }

  const label_to_data = {
    'vgr': data.vgr.names,
    'applications': data.applications.names,
    'systems': data.systems.names,
    'intelligent systems': data.intelligent_systems.names,
    'theory': data.theory.names,
    'intro': data.intro.names
  }
  console.log('data reactions : ', data.reactions)
  const data_json = {
    labels: ["1999-01-01", "2021-12-30"],
    datasets: [
      {
      label: 'vgr',
        data: data.vgr.vals.map((val, i) => {return {'y': val, 'x': data.vgr.dates[i]}}),
        backgroundColor: 'rgb(255, 146, 138)'
      },
      {
        label: 'applications',
          data: data.applications.vals.map((val, i) => {return {'y': val, 'x': data.applications.dates[i]}}),
          backgroundColor: 'rgb(175, 255, 138)'
        },
      {
        label: 'systems',
          data: data.systems.vals.map((val, i) => {return {'y': val, 'x': data.systems.dates[i]}}),
          backgroundColor: 'rgb(110, 219, 255)'
        },
      {
        label: 'intelligent systems',
          data: data.intelligent_systems.vals.map((val, i) => {return {'y': val, 'x': data.intelligent_systems.dates[i]}}),
          backgroundColor: 'rgb(110, 219, 255)'
        },
      {
        label: 'theory',
        data: data.theory.vals.map((val, i) => {return {'y': val, 'x': data.theory.dates[i]}}),
        backgroundColor: 'rgb(238, 255, 110)'
      },
      {
        label: 'intro',
        data: data.intro.vals.map((val, i) => {return {'y': val, 'x': data.intro.dates[i]}}),
        backgroundColor: 'rgb(255, 138, 210)'
      },
    ],
    }

    console.log('datasets : ', data_json)

    return (
        <Scatter data={data_json}
        options = {{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Review',
              },
              type: 'time',
              time: {
                unit: 'year'
              },
              ticks: {
              },
              adapters: {
                date: {
                  locale: enUS,
                }
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Reactions',
              }
            }
          },
          plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label;

                        /*
                        console.log('context : ', context)

                        console.log('index : ', context.element.$context.index)

                        console.log('res', label_to_data[label][context.element.$context.index])
                        */

                        return (label_to_data[label][context.element.$context.index])
                    }
                }
            }
        }
        }}
        />
        )
};

export default LineGraph;