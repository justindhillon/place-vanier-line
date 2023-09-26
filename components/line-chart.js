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

          const data = {
            labels: res.data.pets.rows.map((info) => info.time),
            datasets: [
              {
                label: "Users Gained",
                data: res.data.pets.rows.map((info) => info.value),
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
          }

          setPosts(data);
      }
      fetchData();
  }, []);

  return <Line data={data} />
}