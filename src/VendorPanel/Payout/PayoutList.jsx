import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link,useNavigate } from 'react-router-dom';


export default function PayoutList() {
  const navigate = useNavigate();

    const rows = [
        { id: 1,
            status: 'Paid',
            orderID: '#456789',
            payoutmode: 'Paypal'
         },


        { id: 2, status: 'Panding', orderID: '#987670', payoutmode: 'Netbanking' },
        { id: 3, status: 'Paid', orderID: '#90890', payoutmode: 'Paytm' },
        { id: 4, status: 'Paid', orderID: '#098765', payoutmode: 'Gpay' },
        { id: 5, status: 'Paid', orderID: '#098765', payoutmode: 'UPI' },
        { id: 6, status: 'Panding', orderID: '#456789', payoutmode:' Paypal' },
        { id: 7, status: 'Panding', orderID: '#3bcee6', payoutmode: 'Cash' },
        { id: 8, status: 'Hold', orderID: '#56789', payoutmode: 'PayPal' },
      
      ];

    const columns = [
        { field: 'id', headerName: 'SL no', width: 100 },
        { field: 'orderID', headerName: 'Order id', width: 250 },
        { field: 'status', headerName: 'Status', width: 230 },
        {
          field: 'payoutmode',
          headerName: 'Payout Mode',
          width: 200,
        },
        {
          field: "action",
          headerName: "Action",
          width: 250, 
          renderCell: (params) => {
            return (
              <>
                <div >
                  <button className="productListEdit" onClick={()=> navigate("/viewPayOut",{state: data,})}>View Details</button>
                </div>     
              </>
            );
          },
        },
      
      ];
    const [data, setdata] = React.useState(rows)
      

      
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
       
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
