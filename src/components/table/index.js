import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.scss'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function DenseTable({children}) {
  const classes = useStyles();

  return (
    <TableContainer >
      <Table className="table">

                {children}

      </Table>
    </TableContainer>
  );
}