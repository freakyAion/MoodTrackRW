import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["Хорошо", "Нормально", "Плохо"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Статистика настроения",
      backgroundColor: ["#FFF27C", "#C4CAFF", "#D06565"],
      borderColor: "transparent",
      data: [5, 11, 24],
      with: 100,
    },
  ],
};

const Diagram = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default Diagram;