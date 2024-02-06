import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { MALE_GRAPH } from "src/constant/male-graph";
import { FEMALE_GRAPH } from "src/constant/female-graph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

export function LineChartComponent({ height, gender }) {
  return (
    <Line
      options={options}
      data={{
        labels: MALE_GRAPH.map((item) => item.month),
        datasets: [
          {
            label: "Height",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data: height,
          },
          {
            label: "Min 3 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.min3sd)
                : FEMALE_GRAPH.map((item) => item.min3sd),
          },
          {
            label: "Min 2 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.min2sd)
                : FEMALE_GRAPH.map((item) => item.min2sd),
          },
          {
            label: "Min 1 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.min1sd)
                : FEMALE_GRAPH.map((item) => item.min1sd),
          },
          {
            label: "0 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.nolsd)
                : FEMALE_GRAPH.map((item) => item.nolsd),
          },
          {
            label: "Plus 1 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.plus1sd)
                : FEMALE_GRAPH.map((item) => item.plus1sd),
          },
          {
            label: "Plus 2 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.plus2sd)
                : FEMALE_GRAPH.map((item) => item.plus2sd),
          },
          {
            label: "Plus 3 SD",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data:
              gender == "male"
                ? MALE_GRAPH.map((item) => item.plus3sd)
                : FEMALE_GRAPH.map((item) => item.plus3sd),
          },
        ],
      }}
    />
  );
}
