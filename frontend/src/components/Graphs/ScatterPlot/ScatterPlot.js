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

const dates = ['2021-01-04', '2021-01-08', '2021-01-01', '2021-01-03', '2021-01-05']

const data_json = {
  labels: dates,
  datasets: [{
    label: 'test label',
      data: [1, 2, 4, 7, 4],
    }]
}

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

// const labels = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

const LineGraph = ({data}) => {
    return (
        <Scatter data={data_json}
        options = {{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day'
              },
              adapters: {
                date: {
                  locale: enUS,
                }
              },
            },
            y: {
              beginAtZero: true,
            }
          }
        }}
        />
        )
};

export default LineGraph;