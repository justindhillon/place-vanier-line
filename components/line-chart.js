import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

export default function LineChart ({ data }) {
    return <Line data={data} />
}
