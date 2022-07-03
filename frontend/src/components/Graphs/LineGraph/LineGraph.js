import React from "react";
import { Line } from "react-chartjs-2";
import Loading from "../../../components/Loading/Loading";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const labels = [
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];
/*
const colors = {
  "adam cannon": "#004c6d",
  "martha kim": "#0094a5",
  "paul blaer": "#48deb3",
  "jae lee": "#9fdb65",
  "ansaf salleb-aouissi": "#ffc629",
};
*/
const colors = {
  "adam cannon": "#004c6d",
  "martha kim": "#6996b3",
  "paul blaer": "#c1e7ff",
};

const test_profs = ["adam cannon", "martha kim", "paul blaer"];

const LineGraph = ({ data }) => {
  if (!data) {
    return <Loading />;
  }

  const data_json = {
    labels: labels,
    datasets: test_profs.map((prof_name) => {
      return {
        label: prof_name,
        borderColor: colors[prof_name],
        backgroundColor: colors[prof_name],
        lineTension: 0.1,
        data: Object.keys(data[prof_name])
          .sort()
          .map((date) => {
            return { x: date, y: data[prof_name][date] };
          }),
        color: colors[prof_name],
      };
    }),
  };
  /*
  const prof_datasets = data.profs.map(prof_name => {
    return {'label': prof_name, 'data': Object.keys(data[prof_name]).sort().map(date => {return {'x': date, 'y': data[prof_name][date]}}), color: colors[prof_name]}
  })
  */
  return (
    <Line
      data={data_json}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: "Reviews",
            },
            grid: {
              drawBorder: false,
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 5,
            },
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
            grid: {
              display: false,
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
        },
      }}
    />
  );
};

export default LineGraph;
