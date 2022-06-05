import { React, useState, useEffect } from "react";
import styles from "./Data.module.css";
import Navbar from "../../components/Navbar/Navbar";
import LineGraph from "../../components/Graphs/LineGraph/LineGraph";
import BarChart from "../../components/Graphs/BarChart/BarChart";
import ScatterPlot from "../../components/Graphs/ScatterPlot/ScatterPlot";
import ChartBlurb from "../../components/Graphs/components/ChartBlurb/ChartBlurb";
import { Link } from "react-router-dom";
import axios from "axios";
import PopularProfs from "../../components/Graphs/components/PopularProfs/PopularProfs";
import blurbs from "./blurbs.js";

const { popularity } = blurbs;

const { frequency } = blurbs;

const { totalReviews } = blurbs;

const Data = () => {
  const [chartData, setChartData] = useState({});
  const [wordSelect, setWordSelect] = useState(["easy"]);

  const barButtons = ["easy", "hard", "interesting", "boring", "fair"];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/get-chart-data`);
      console.log("chart data : ", data);
      setChartData({
        ...chartData,
        scatter: data.scatter,
        bar: data.bar,
        line: data.line,
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Full Data and Insights</h1>
      <h3 className={styles.smallTitle}>
        Any More Questions? Check out the <Link to={"/about"}>about page</Link>
      </h3>
      <div className={styles.chartContainer}>
        <ChartBlurb
          category={popularity.category}
          header={popularity.header}
          content={popularity.content}
        >
          <PopularProfs />
        </ChartBlurb>
        <div className={styles.chart}>
          <LineGraph data={chartData["line"]} />
        </div>
      </div>
      <div className={styles.chartContainer}>
        <ChartBlurb
          category={frequency.category}
          header={frequency.header}
          content={frequency.content}
        >
          {barButtons.map((name) => (
            <button
              key={name}
              name={name}
              selected={wordSelect}
              onClick={() => setWordSelect(name)}
              className={
                name === wordSelect
                  ? styles.filterButtonSelected
                  : styles.filterButton
              }
            >
              {name}
            </button>
          ))}
        </ChartBlurb>
        <div className={styles.chart}>
          <BarChart data={chartData["bar"]} selected={wordSelect} />
        </div>
      </div>
      <div className={styles.chartContainer}>
        <ChartBlurb
          category={totalReviews.category}
          header={totalReviews.header}
          content={totalReviews.content}
        ></ChartBlurb>
        <div className={styles.chart}>
          <ScatterPlot data={chartData["scatter"]} />
        </div>
      </div>
      <div className={styles.chartContainerTest}>
        <ChartBlurb
          category={totalReviews.category}
          header={totalReviews.header}
          content={totalReviews.content}
          type={"scatter"}
        ></ChartBlurb>
        <div className={styles.chartScatter}>
          <ScatterPlot data={chartData["scatter"]} />
        </div>
      </div>
      <h1>TBD: More stuff coming!</h1>
    </>
  );
};

export default Data;
