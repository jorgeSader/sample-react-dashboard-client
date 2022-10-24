import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={'20px'}>
      <Header title={'FAQ'} subTitle="Frequently Assked Questions" />
      <Accordion defaultExpanded>
        {/* QUESTION */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Are you a Frontend developer?
          </Typography>
        </AccordionSummary>
        {/* ANSWER */}
        <AccordionDetails>
          <Typography>
            While I can, and by all means do work on the front end, I also work
            on the back end to create, debug and/or update making me of an
            overall developer commonly know in the industry as a Full Stack
            developer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Are you a Backend developer?
          </Typography>
        </AccordionSummary>
        {/* ANSWER */}
        <AccordionDetails>
          <Typography>
            While I can, and by all means do work on the back end, I also work
            on the front end to create, debug and/or update making me of an
            overall developer commonly know in the industry as a Full Stack
            developer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How Does it work?
          </Typography>
        </AccordionSummary>
        {/* ANSWER */}
        <AccordionDetails>
          <Typography>
            While I can, and by all means do work on the front end, I also work
            on the back end to create, debug and/or update making me of an
            overall developer commonly know in the industry as a Full Stack
            developer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Which frameworks do you preffer working on?
          </Typography>
        </AccordionSummary>
        {/* ANSWER */}
        <AccordionDetails>
          <Typography>
            While I can, and by all means do work on the front end, I also work
            on the back end to create, debug and/or update making me of an
            overall developer commonly know in the industry as a Full Stack
            developer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Are you familiar with Functional programming?
          </Typography>
        </AccordionSummary>
        {/* ANSWER */}
        <AccordionDetails>
          <Typography>
            While I can, and by all means do work on the front end, I also work
            on the back end to create, debug and/or update making me of an
            overall developer commonly know in the industry as a Full Stack
            developer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Are you a Web3 developer?
          </Typography>
        </AccordionSummary>
        {/* ANSWER */}
        <AccordionDetails>
          <Typography>
            While I can, and by all means do work on the front end, I also work
            on the back end to create, debug and/or update making me of an
            overall developer commonly know in the industry as a Full Stack
            developer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
