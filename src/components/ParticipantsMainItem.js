import React from 'react';
import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  accordion: {
    background: 'rgba(255, 255, 255, 0.48)!important',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8.5px)',
    WebkitBackdropFilter: 'blur(6.5px)',
    marginBottom: '10px',
    color: 'black',
  },
  accordionSummary: {
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '20px',
    font:'italic',
  },
  accordionDetails: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  typographyContainer: {
    margin: '10px',
  },
  typography: {
    color: 'black',
    fontStyle:'italic',
    backgroundColor: 'transparent',
    margin: '10px',
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
        className={classes.accordionSummary}
      >
        <div className='flex flex-row justify-center align-middle center'>
          <img src={src} alt="Your Image" className='w-32 h-32 justify-self-center participant-img' />
          <div className='flex flex-col ml-4'>
            <p className='text-base md:text-xl lg:text-3xl uppercase'>{name}</p>
            <p className='text-base md:text-xl lg:text-xl'>{title}</p>
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
