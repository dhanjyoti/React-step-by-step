import './App.css';
import * as React from "react";
import dayjs from "dayjs";
// import {LinePlot, ResponsiveChartContainer} from "@mui/x-charts";
// import {
//   ChartsXAxis,
//   ChartsYAxis,
//   LinePlot,
//   MarkPlot,
//   ResponsiveChartContainer
// } from "@mui/x-charts";
// import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import {
  ChartsAxisHighlight,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LineHighlightPlot,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer
} from "@mui/x-charts";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";



const xAxisData = [
  new Date('2023-12-04'),
  new Date('2023-12-05'),
  new Date('2023-12-06'),
  new Date('2023-12-07'),
  new Date('2023-12-08'),
  new Date('2023-12-09'),
  new Date('2023-12-10'),
];
const seriesData = [
  [43, 38, 36, 30, 37, 43, 44],
  [31, 28, 27, 27, 33, 40, 35]
]

function App() {
  const xAxis = [{
    label: "Date",
    data: xAxisData,
    tickInterval: xAxisData,
    scaleType: 'time',
    valueFormatter: (date) => dayjs(date).format("MMM D"),
  }]
  const yAxis = [{ label: "Temperature (°F)" }];
  const height = 400;

  return (
    <div className="App">
      <ResponsiveChartContainer
        xAxis={xAxis}
        yAxis={yAxis}
        series={[
          {type: 'line', label: 'Atlanta, GA', data: seriesData[0]},
          {type: 'line', label: 'Toronto, ON', data: seriesData[1]},
        ]}
        height={height}
      >
        <LinePlot />
        <ChartsXAxis />
        <ChartsYAxis />
        <MarkPlot />
        <ChartsLegend />
        <LineHighlightPlot />
        <ChartsAxisHighlight x="line" />
        <ChartsTooltip trigger="axis" />
      </ResponsiveChartContainer>
    </div>
  );
}

export default App;
