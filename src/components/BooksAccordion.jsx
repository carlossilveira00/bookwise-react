import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react'
import BookIconWithTitle from './BookIconWithTitle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BooksAccordion = ({title}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="body1" color="initial">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <BookIconWithTitle></BookIconWithTitle>
        <BookIconWithTitle></BookIconWithTitle>
      </AccordionDetails>
    </Accordion>
  )
};

export default BooksAccordion;
