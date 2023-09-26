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
          setPosts(res.pets);
      }
      fetchData();
  }, []);
  
  return <div>{posts}</div>
}
