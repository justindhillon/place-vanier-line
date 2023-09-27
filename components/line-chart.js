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
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        label: "Number of people stuck in line",
        data: posts.map((info) => info.value),
      },
    ],
  }

  return (
    <div className={`chart`}>
      <Line width="100" data={data} />
    </div>
  )
}