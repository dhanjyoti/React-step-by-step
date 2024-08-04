import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBar({data}) {
  return (
    <>
      <BarChart
        series={data.series}
        xAxis={data.xAxis}
        width={800}
        height={300}
      />
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </>
  );
}
