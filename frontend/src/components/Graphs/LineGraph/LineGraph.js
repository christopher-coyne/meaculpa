import React from "react";
import { scaleLinear, max, scaleBand } from "d3";
import styles from "./LineGraph.module.css";
import { Line } from "react-chartjs-2";
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

const mydata = [
  { year: "1999", reviews: "10" },
  { year: "2000", reviews: "13" },
  { year: "2001", reviews: "19" },
  { year: "2002", reviews: "21" },
  { year: "2003", reviews: "54" },
  { year: "2004", reviews: "32" },
  { year: "2005", reviews: "67" },
  { year: "2006", reviews: "77" },
  { year: "2007", reviews: "79" },
  { year: "2008", reviews: "75" },
  { year: "2009", reviews: "82" },
  { year: "2010", reviews: "89" },
  { year: "2011", reviews: "100" },
  { year: "2012", reviews: "101" },
  { year: "2013", reviews: "103" },
  { year: "2014", reviews: "97" },
  { year: "2015", reviews: "91" },
  { year: "2016", reviews: "65" },
  { year: "2017", reviews: "78" },
  { year: "2018", reviews: "34" },
  { year: "2019", reviews: "15" },
  { year: "2020", reviews: "18" },
  { year: "2021", reviews: "18" },
];

const datasets = [
  {
    label: "paul blaer",
    data: [12, 19, 3, 5, 2],
    backgroundColor: ["red", "orange", "blue", "gray", "black"],
  },
  {
    label: "adam cannon",
    data: [10, 14, 7, 7, 9, 12, 17],
    backgroundColor: ["red", "orange", "blue", "gray", "black"],
  },
];

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
const colors = {
  "adam cannon": "red",
  "martha kim": "blue",
  "paul blaer": "yellow",
  "jae lee": "green",
  "ansaf salleb-aouissi": "orange",
};

const LineGraph = ({ data }) => {
  if (!data) {
    return <>Loading...</>;
  }

  console.log("new data from line : ", data);
  const data_json = {
    labels: labels,
    datasets: data.profs.map((prof_name) => {
      return {
        label: prof_name,
        borderColor: colors[prof_name],
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
  const prof_datasets = [
    {
      label: "paul blaer",
      data: data["paul blaer"],
      backgroundColor: ["red", "orange", "blue", "gray", "black"],
    },
  ];
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
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
        },
      }}
    />
  );
};

export default LineGraph;
