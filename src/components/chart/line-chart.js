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
import { monthsMale, min1sdMale, min2sdMale, min3sdMale, nolsdMale, plus1sdMale, plus2sdMale, plus3sdMale} from "src/constant/male-graph";
import { monthsFemale, min1sdFemale, min2sdFemale, min3sdFemale, nolsdFemale, plus1sdFemale, plus2sdFemale, plus3sdFemale} from "src/constant/female-graph"

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

export function LineChartComponent({height, gender}) {

  return <Line options={options} data={{
    labels: monthsMale,
    datasets: [
      {
        label: "Height",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: height
      },
      {
        label: "Min 3 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? min3sdMale : min3sdFemale
      },
      {
        label: "Min 2 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? min2sdMale : min2sdFemale
      },
      {
        label: "Min 1 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? min1sdMale : min1sdFemale
      },
      {
        label: "0 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? nolsdMale : nolsdFemale
      },
      {
        label: "Plus 1 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? plus1sdMale : plus1sdFemale
      },
      {
        label: "Plus 2 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? plus2sdMale : plus2sdFemale
      },
      {
        label: "Plus 3 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: gender == "male" ? plus3sdMale : plus3sdFemale
      }, 
    ]
  }} />;
}
