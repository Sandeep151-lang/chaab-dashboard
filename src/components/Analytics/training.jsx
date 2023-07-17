import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Title,
  LinearScale,
  CategoryScale,
  BarElement,
  Legend
);

export const data = {
  labels: ["Passed", "Failed"],
  innerlabels: ["ddd", "ddd"],
  datasets: [
    {
      labels: ["circle"],
      data: [20, 10],
      backgroundColor: ["rgba(1,142,66,1)", "rgba(237,28,36,1)"],

      borderColor: ["rgba(1,142,66,1)", "rgba(54, 162, 235, 1)"],
      cutout: "60%",

      borderWidth: [0, 0],
    },
  ],
};

const options = {
  cutout: 40,
  plugins: {
    legend: {
      position: "right",
      labels: {
        // boxWidth:"10"
        usePointStyle: true,
        ppintStyle: "circle",
      },
    },
  },
};
ChartJS.register(ArcElement, Tooltip, Legend);

export const barOptions = {
  indexAxis: "x",
  responsive: true,
  y: {
    display: false,
    grid: {
      display: false,
    },
    beginAtZero: true,
    max: 160,
    ticks: {
      stepSize: 40,
    },
  },
  x: {
    display: false,
    beginAtZero: true,
    max: 15,
    ticks: {
      stepSize: 1,
    },
    grid: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    grid: {
      display: false,
    },
    title: {
      display: true,
      // text: 'Chart.js Bar Chart',
    },
  },
};

const barData = {
  labels: ["S", "M", "T", "W", "T", "F", "S", "M", "F"],
  datasets: [
    {
      label: "Progress",
      data: [100, 99, 20, 25, 30, 35, 21, 30, 11, 19, 22, 26, 99, 36, 110],
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 0,
      // borderRadius:5,
      barThickness: 10,
      minBarLength: 2,
      borderRadius: [
        { topRight: 20, bottomRight: 20 }, // Bar 1
        { topRight: 10, bottomRight: 10 }, // Bar 2
        { topRight: 10, bottomRight: 10 }, // Bar 3
      ],
    },
  ],
};

const Training = () => {
  return (
    <div className="training-chart-section">
      <div className="training-chart-left">
        <div>
          <p className="card-header">Monthly Training Activity</p>
        </div>
        <div>
          <ul className="heading">
            <li>
              <p>16% more enrollees this month</p>
            </li>
          </ul>
        </div>
        <ul className="training-content">
          <li>
            <p className="course">Course a</p>
            <p className="count">23 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course b</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course c</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course d</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
        </ul>
      </div>
      <div className="training-chart-mid">
        <p className="card-header">Quiz Passing %</p>
        <div className="dougnut-circle">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="training-chart-right">
        <div className="days-header">
          <p className="days-header-left">Daily Training Completions</p>
          <p className="days-header-right">Last 7 days</p>
        </div>
        <div className="bar-chart">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default Training;
