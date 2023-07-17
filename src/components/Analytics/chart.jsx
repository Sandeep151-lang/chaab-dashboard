import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
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
  labels: [
    "Finished Training",
    "Chapter A",
    "Chapter B",
    "Chapter C",
    " Haven't Started Yet",
  ],

  datasets: [
    {
      labels: ["circle"],
      data: [20, 10, 22, 20, 20],
      backgroundColor: [
        "rgba(180,206,255,1)",
        "rgba(255,255,255,1)",
        "rgba(255,255,255,1)",
        "rgba(255,255,255,1)",
        "rgba(255,255,255,1)",
      ],

      borderColor: ["#91918a", "#91918a", "#91918a", "#91918a", "#91918a"],
      cutout: "60%",

      // borderWidth: [0, 0],
    },
  ],
};

const options = {
  elements: {
    arc: {
      borderWidth: 1, // <-- Set this to derired value
      borderColor: "#333",
    },
  },

  plugins: {
    labels: ["Minor", "Other"],
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 1,
        usePointStyle: true,
        ppintStyle: "circle",
      },
    },
  },
};

const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      ctx.font = "em sans-serif";
      ctx.textBaseline = "center";
      var text = "Finish Training",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 3;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];

const arr = [];
for (let i = 1; i <= 15; i++) {
  arr.push(i);
}
const labels = arr;

const barData = {
  labels,
  datasets: [
    {
      label: "Progress",
      data: [
        100, 150, 200, 250, 300, 350, 215, 301, 110, 119, 220, 256, 99, 36, 55,
      ],
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

export const barOptions = {
  indexAxis: "x",
  responsive: true,
  y: {
    display: false,
    grid: {
      display: false,
    },
    beginAtZero: true,
    max: 400,
    ticks: {
      stepSize: 100,
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
      drawOnChartArea: false,
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

const Chart = () => {
  return (
    <>
      <div className="chart-section">
        <div className="chart-left">
          <p className="circular-chart-left-text">Chapter Wise Status</p>
          <div className="circular-chart-left">
            <Doughnut data={data} options={options} plugins={plugins} />
          </div>
        </div>
        <div className="chart-right">
          <div className="days-header">
            <p className="days-header-left">
              Last 14 Days Active Workers In Training
            </p>
            <p className="days-header-right">Last 14 days</p>
          </div>
          <div className="bar-chart">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
