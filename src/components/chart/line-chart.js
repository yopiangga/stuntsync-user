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
import graphContant from "src/constant/graph.json";

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

const months = []
const min3sd = []
const min2sd = []
const min1sd = []
const nolsd = []
const plus1sd = []
const plus2sd = []
const plus3sd = []

export function LineChartComponent({height, gender}) {

  useEffect(() => {
    fetchConsts(gender)
  }, [])

  function fetchConsts(gender){
    graphContant.forEach((item) => {
      if(gender == item.gender){
        months.push(item.month)
        min3sd.push(item.min3sd)
        min2sd.push(item.min2sd)
        min1sd.push(item.min1sd)
        nolsd.push(item.nolsd)
        plus1sd.push(item.plus1sd)
        plus2sd.push(item.plus2sd)
        plus3sd.push(item.plus3sd)
      }
    })
  }

  return <Line options={options} data={{
    labels: months,
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
        data: min3sd
      },
      {
        label: "Min 2 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: min2sd
      },
      {
        label: "Min 1 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: min1sd
      },
      {
        label: "0 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: nolsd
      },
      {
        label: "Plus 1 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: plus1sd
      },
      {
        label: "Plus 2 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: plus2sd
      },
      {
        label: "Plus 3 SD",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: plus3sd
      },
    ]
  }} />;
}
