import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('user582', 'test@gmail.com', 'Standard',' 24-01-2021', '22-01-2023'),
  createData('user1', 'test@gmail.com', 'Standard',' 24-01-2021',' 24-01-2021'),
  createData('user2', 'test@gmail.com', 'Standard', ' 24-01-2021', ' 24-01-2021'),
  createData('user3','test@gmail.com' , 'Standard', ' 24-01-2021',' 24-01-2021'),
  createData('user4', 'test@gmail.com', 'Standard',' 24-01-2021', ' 24-01-2021'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Use Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Plane</TableCell>
            <TableCell align="right">Join Date</TableCell>
            <TableCell align="right">Renew Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
