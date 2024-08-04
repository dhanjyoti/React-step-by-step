import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import data1 from '../dataUtils/data1.json';
import BasicBar from '@/charts/BasicBars'; 

export default function Dropdown() {
  const [chartType, setChartType] = useState('');
  const [chartOpen, setChartOpen] = useState(false);
  const [dataFile, setDataFile] = useState('data1');
  const [dataOpen, setDataOpen] = useState(false);

  const handleChartChange = (event) => {
    setChartType(event.target.value);
  };

  const handleChartClose = () => {
    setChartOpen(false);
  };

  const handleChartOpen = () => {
    setChartOpen(true);
  };

  const handleDataChange = (event) => {
    setDataFile(event.target.value);
  };

  const handleDataClose = () => {
    setDataOpen(false);
  };

  const handleDataOpen = () => {
    setDataOpen(true);
  };

  const getData = () => {
    switch (dataFile) {
      case 'data1':
        return data1;
      default:
        return data1;
    }
  };

  const renderComponent = () => {
    const data = getData();
    switch (chartType) {
      case 10:
        return <BasicBar data={data} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Chart Type</InputLabel>
        <Select
          labelId='demo-controlled-open-select-label'
          id='demo-controlled-open-select'
          open={chartOpen}
          onClose={handleChartClose}
          onOpen={handleChartOpen}
          value={chartType}
          label='Chart Type'
          onChange={handleChartChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Bar Chart</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-controlled-data-select-label'>Data File</InputLabel>
        <Select
          labelId='demo-controlled-data-select-label'
          id='demo-control-data-select'
          open={dataOpen}
          onClose={handleDataClose}
          onOpen={handleDataOpen}
          value={dataFile}
          label='Data File'
          onChange={handleDataChange}
        >
          <MenuItem value='data1'>Data File 1</MenuItem>
        </Select>
      </FormControl>
      {renderComponent()}
    </div>
  );
}
