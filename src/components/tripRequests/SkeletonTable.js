import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';
import './requestsTable.scss';

const SkeletonTable = () => (
  <TableContainer component={Paper} className="datatable">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">
            <Skeleton variant="rectangular" animation="wave" height="25px" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton variant="rectangular" animation="wave" height="25px" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton variant="rectangular" animation="wave" height="25px" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton variant="rectangular" animation="wave" height="25px" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton variant="rectangular" animation="wave" height="25px" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton variant="rectangular" animation="wave" height="25px" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell className="tableCell">
            <Skeleton animation="wave" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default SkeletonTable;
