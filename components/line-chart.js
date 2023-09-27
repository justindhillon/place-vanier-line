import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function LineChart () {
  const [posts, setPosts] = useState([]);
  
  useEffect( () => { 
      async function fetchData() {
          const res = await axios.get('https://placevanierline.vercel.app/api/get-data'); 
          setPosts(res.data.pets.rows);
      }
      fetchData();
  }, []);

  const data = {
    labels: posts.map((info) => info.time),
    datasets: [
      {
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        label: "Number of people stuck in line",
        data: posts.map((info) => info.value),
      },
    ],
  }

  var options = {
    maintainAspectRatio: false,
  }

  return <div class="chart-container"><Line data={data} options={options} /></div>
}