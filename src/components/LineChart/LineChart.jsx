import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import './LineChart.css';

const LineChat = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData?.prices) {
      const DataCopy = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        DataCopy.push([
          new Date(item[0]).toLocaleDateString().slice(0, -5),
          item[1]
        ]);
      });
      setData(DataCopy);
    }
  }, [historicalData]);

  if (!historicalData?.prices) {
    return <div>Loading or no data...</div>;
  }

  const chartOptions = {
    backgroundColor: 'transparent',
    hAxis: {
      textStyle: { color: '#ffffff' },
      
    },
    vAxis: {
      textStyle: { color: '#ffffff' },
     
    },
    legend: {
      textStyle: { color: '#ffffff' },
    },
    colors: ['#ffffff'],
    lineWidth: 1,
    pointSize: 2,

    chartArea: {
      left: 60,
      top: 20,
      bottom: 50,
      right: 30,
      width: '80%',
      height: '70%',
    },
  };

  return (

    <div className='line-chart'>
    <Chart
      chartType="LineChart"
      width="100%"
      height="100%"
      data={data}
      options={chartOptions}
      
    />    
    </div>
    
  );
};

export default LineChat;
