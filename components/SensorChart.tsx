import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, 
  LinearScale, PointElement, LineElement } from 'chart.js'; 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement); 

interface Data {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: any;
    borderColor: string;
  }[];
}

const SensorChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState<Data>({
    labels: [],
    datasets: [
      {
        label: 'Sensor Data',
        data: [],
        fill: true,
        backgroundColor: chartRef.current ? (chart: any) => {
          const ctx = chart.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.5)'); 
          gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.5)');
          gradient.addColorStop(1, 'rgba(255, 0, 0, 0.5)');
          return gradient;
        } : 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        labels: [...prevData.labels, new Date().toLocaleTimeString()],
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, Math.random() * 100],
          },
        ],
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Line ref={chartRef} data={data} />;
};

export default SensorChart;
