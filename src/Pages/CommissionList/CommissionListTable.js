import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'SL No', width: 100 },
  { field: 'firstName', headerName: 'Store Id ', width: 170 },
  { field: 'totalcomission', headerName: 'Total Commission', width: 170 },
  {
    field: 'from',
    headerName: 'From',
  
    width: 190,
  },
  {
    field: 'to',
    headerName: 'To',

    width: 190,
  },
  {
    field: 'remark',
    headerName: 'Remark',
  
    width: 150,
  },

];

const rows = [
  { id: 1, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 2, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 3, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 4, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 5, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 6, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 7, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 8, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 9, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },
  { id: 10, totalcomission: '$567', firstName: '#4572', from: '12-01-2020', to : '15-03-2022', remark : 'Good' },

];

export default function DataTable() {
  return (
    <div style={{ height: 560, width: '100%' }}>
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
