import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReportGmailerrorred } from '@mui/icons-material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'Email', headerName: 'Email', width: 210 },
  { field: 'Mobile', headerName: 'Mobile No', width: 180 },
  { field: 'Address', headerName: 'Address', width: 230 },

 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Email: 'test@gmail.com'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Email: 'test@gmail.com'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', Email: 'test@gmail.com'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', Email: 'test@gmail.com'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Email: 'test@gmail.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, Email: 'test@gmail.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Email: 'test@gmail.com'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Email: 'test@gmail.com'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Email: 'test@gmail.com'},
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
