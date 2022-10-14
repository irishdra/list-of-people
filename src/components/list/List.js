import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';

export const List = ({data, onDelete}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell
              align="center"
            >
              Age
            </TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell align="center">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">
                {row.gender ? 'Male': 'Female'}
              </TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => onDelete(row.id)}
                  variant="contained"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
