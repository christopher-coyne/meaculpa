import React from "react";
import { Bar } from "react-chartjs-2";
import Loading from "../../../components/Loading/Loading";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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
    return <Loading />;
  }
  const class_labels = [
    "Operating Systems",
    "Intro to Databases",
    "Analysis of Algorithms",
    "Artificial Intelligence",
    "UI Design",
  ];

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
        maintainAspectRatio: false,
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
              display: false,
              text: "Occurences per review",
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 5,
            },
            grid: {
              drawBorder: false,
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
