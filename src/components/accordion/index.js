import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  heading: {
    
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({title,children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
         
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}