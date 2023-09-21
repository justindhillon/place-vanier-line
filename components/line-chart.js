import React from "react";
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

export default function LineChart () {
    fetch('https://placevanierline.vercel.app/api/get-data', { method: 'POST' })
    .then(response => response.json())
    .then(response => console.log(response.pets.rows)); 

    return <Line data={UserData} />
}
