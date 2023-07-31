import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const Chart = ({ data }) => {
  const midata = {
    labels: data.map((el) => el.date).reverse(),
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Compra",
        data: data.map((el) => el.value_buy).reverse(),
        tension: 0.5,
        fill: true,
        borderColor: "rgb(12, 136, 218)",
        backgroundColor: "rgba(12, 136, 218, 0.2)",
        pointRadius: 5,
        pointBorderColor: "rgba(12, 136, 218)",
        pointBackgroundColor: "rgba(12, 136, 218)",
      },
      {
        label: "Venta",
        data: data.map((el) => el.value_sell).reverse(),
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  const misoptions = {
    scales: {
      y: {
        min: Math.min(data.map((el) => el.value_buy)),
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return <Line data={midata} options={misoptions} />;
};
