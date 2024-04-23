import React from 'react';
import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  accordion: {
    background: 'rgb(153,58,58)',
    background: 'linear-gradient(135deg, rgba(153,58,58,1) 12%, rgba(105,90,46,1) 46%, rgba(52,43,32,1) 83%, rgba(24,14,2,1) 100%)',
    color: 'white',
    marginBottom:'10px',
    '& .MuiAccordionSummary-root': {
      backgroundColor: 'transparent',
      color: 'white',
      borderRadius: '20px'
    },
    '& .MuiAccordionDetails-root': {
      backgroundColor: 'transparent',
      color: 'white',
    },
  },
  typographyContainer: {
    margin: '10px',
  },
  typography: {
    color: 'white',
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-root': {
      margin: '10px',
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '20px'
    },
    '& .MuiAccordionDetails-root': {
      margin: '10px',
      backgroundColor: 'black',
      color: 'white',
    },
  },
}));

const YourAccordionComponent = ({ src, name, title, about }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion} sx={{ borderRadius: '10px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <div className='flex flex-row justify-center align-middle center'>
           <img src={src} alt="Your Image" className='w-32 h-32 justify-self-center participant-img ' />
        <div className='flex flex-col ml-4'>
          <p className='text-base md:text-xl lg:text-3xl' >{name}</p>
          <p className='text-base md:text-xl lg:text-xl' >{title}</p>
        </div>
        </div>
       
      </AccordionSummary>
      <div className={classes.typographyContainer}>
        <Typography className={classes.typography}>
          {about}
        </Typography>
      </div>
    </Accordion>
  );
}

export default YourAccordionComponent;
