import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { MqttClient } from 'mqtt';
import { client } from './Mqtt'; // Importa el cliente MQTT del archivo Mqtt.tsx
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'; // Importa ChartJS, CategoryScale, LinearScale y PointElement

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement); 


interface Data {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}

const SensorChart = () => {
  const [data, setData] = useState<Data>({
    labels: [],
    datasets: [
      {
        label: 'Sensor Data',
        data: [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  useEffect(() => {
    client.on('message', (topic, message) => {
      setData((prevData) => ({
        ...prevData,
        labels: [...prevData.labels, new Date().toLocaleTimeString()],
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, parseFloat(message.toString())],
          },
        ],
      }));
    });

    return () => {
      client.removeAllListeners('message');
    };
  }, []);

  return <Line data={data} />;
};

export default SensorChart;
