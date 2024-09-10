// components/PieChart.js

import { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ emission, tonnes, km }) => {
  const chartRef = useRef(null);

  // Define the data
  const data = {
    labels: ['Processing', 'Extraction', 'Transportation', 'Blasting', 'Handling'],
    datasets: [
      {
        label: 'Operations Breakdown',
        data: [emission.processing * tonnes, emission.extraction * tonnes, emission.transportation * km, emission.blasting * tonnes, emission.handling * tonnes],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',   // Processing - Blue
          'rgba(255, 99, 132, 0.7)',   // Extraction - Red
          'rgba(255, 206, 86, 0.7)',   // Transportation - Yellow
          'rgba(75, 192, 192, 0.7)',   // Blasting - Green
          'rgba(153, 102, 255, 0.7)',  // Handling - Purple
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255,99,132,1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  // Define options for responsiveness and animations
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to resize based on parent container
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            let value = context.parsed || 0;
            return `${label}: ${(value * 100).toFixed(1)}%`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1500,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative" style={{ height: '300px' }}>
        <Pie data={data} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default PieChart;
