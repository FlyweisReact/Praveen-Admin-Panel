import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Services ', width: 230 },
  { field: 'lastName', headerName: 'Categories', width: 230 },

];

const rows = [
  { id: 1, lastName: 'categories 1', firstName: 'Services 1', age: 35 },
  { id: 1, lastName: 'categories 1', firstName: 'Services 2', age: 35 },
  { id: 1, lastName: 'categories 2', firstName: 'Services 1', age: 35 },
  { id: 1, lastName: 'categories 3', firstName: 'Services 1', age: 35 },

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
