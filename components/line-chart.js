import React from "react";
import { useState } from "react";
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

async function getData() {
  let raw_data;

  const res = await fetch('https://placevanierline.vercel.app/api/get-data');
  raw_data = await res.json();

  const data = await raw_data.pets.rows;

  return data;
}

export default function LineChart () {
  console.log(getData());
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

      const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    return <Line data={userData} />
}
