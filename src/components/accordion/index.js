import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  heading: {
    
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  answer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 15
  },
  icon: {
    marginRight: 15
  },
  text: {
    textAlign: 'left',
  }
}));

export default function SimpleAccordion({title,children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="accordion">
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon className={classes.icon}/>}
          expandIcon={<ExpandMoreIcon color="primary" />}
         
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography variant="caption" className={classes.answer}>
            <ChevronRightIcon className={classes.icon}/>
            <div className={classes.text}>
              {children}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}