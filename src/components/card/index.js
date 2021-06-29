import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './styles.scss'
import { Typography } from '@material-ui/core';

export default function SimpleCard({children,title}) {

  return (
    <Card classes={{root:"card"}}>
      <CardContent>
          <Typography variant="h2" className="title">{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
}
