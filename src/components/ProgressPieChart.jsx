import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FaCircle } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ProgressPieChart = ({ complete, uncomplete }) => {
  const completePercentage = complete;
  const uncompletePercentage = uncomplete;

  const data = {
    datasets: [
      {
        label: 'Task Completion',
        data: [complete, uncomplete],
        backgroundColor: ['#B47000', '#F7F7F7'],
        hoverBackgroundColor: ['#B47000', '#F7F7F7'],
        borderWidth: 1,
      },
    ],
    labels: [`Complete (${completePercentage}%)`, `Uncomplete (${uncompletePercentage}%)`],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} tasks`;
          },
        },
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: '#F7F7F7',
        formatter: (value, context) => {
          const percentage = value + '%';
          return percentage;
        },
        font: {
          weight: 'bold',
          size: 16,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full p-4 shadow-lg flex flex-col gap-4 items-center justify-center">
      <p className='w-full text-left text-2xl text-font01'>Your Progress</p>
      <div className="w-[250px] h-[250px] rounded-full border-[14px] border-gray-200">
        <Pie data={data} options={options} />
      </div>
      <div className='flex gap-8'>
        <p className='flex items-center gap-2'>
          <FaCircle className='text-font02' size={28}/>
          <span className='text-font01'>Complete</span>
        </p>
        <p className='flex items-center gap-2'>
          <FaCircle className='text-font03 shadow-lg rounded-full' size={28}/>
          <span className='text-font01'>Uncomplete</span>
        </p>
      </div>
    </div>
  );
};

export default ProgressPieChart;
