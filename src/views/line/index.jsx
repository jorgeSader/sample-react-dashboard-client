import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

import React from 'react';

export default function Line() {
  return (
    <Box m={'20px'}>
      <Header title={'LINE CHART'} subTitle="Basic Line Chart" />
      <Box height={'75vh'}>
        <LineChart />
      </Box>
    </Box>
  );
}
