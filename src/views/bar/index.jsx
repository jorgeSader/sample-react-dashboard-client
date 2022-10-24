import { Box } from '@mui/material';

import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

export default function Bar() {
  return (
    <Box m={'20px'}>
      <Header title={'BAR CHART'} subTitle={'Simple Bar Chart'} />
      <Box height={'75vh'}>
        <BarChart />
      </Box>
    </Box>
  );
}
