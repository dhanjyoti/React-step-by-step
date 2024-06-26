// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@mui/x-charts";

const Chart = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 5 },
    { x: 3, y: 3 },
    { x: 4, y: 7 },
  ];

  return <LineChart width={600} height={400} series={[{ data }]} />;

};

export default Chart;
