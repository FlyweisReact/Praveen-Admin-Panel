import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width:100 },
  { field: 'firstName', headerName: 'Task ID', width: 230 },
  { field: 'date', headerName: 'Date', width: 180 },
  { field: 'status', headerName: 'Status', width: 230 },
  
  
];

const rows = [
  { id: 1, date: '20-02-2021', firstName: '#234567',   status :"completed" },

  { id: 9, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 2, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 4, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 6, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 7, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 77, date: '22-03-2021', firstName: '#76890',  status :"completed" },
//   { id: 09, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 34, date: '22-03-2021', firstName: '#76890',  status :"completed" },
//   { id: 05, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 11, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 12, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 24, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 91, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 99, date: '22-03-2021', firstName: '#76890',  status :"completed" },
  { id: 90, date: '22-03-2021', firstName: '#76890',  status :"completed" },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
}
