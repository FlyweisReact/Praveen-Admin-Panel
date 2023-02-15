
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";



const rows = [
  { id: 1, status: 'available', stock: 'Jon', price: 200, img : 'https://ecomexpress.in/wp-content/uploads/2021/04/New-Project-2021-04-23T133156.011.png', name: 'BlueDart' },
  { id: 1, status: 'available', stock: 'Jon', price: 200, img : 'https://ecomexpress.in/wp-content/uploads/2021/04/New-Project-2021-04-23T133156.011.png', name: 'BlueDart' },
  { id: 1, status: 'available', stock: 'Jon', price: 200, img : 'https://ecomexpress.in/wp-content/uploads/2021/04/New-Project-2021-04-23T133156.011.png', name: 'BlueDart' },
  { id: 1, status: 'available', stock: 'Jon', price: 200, img : 'https://ecomexpress.in/wp-content/uploads/2021/04/New-Project-2021-04-23T133156.011.png', name: 'BlueDart' },
  { id: 1, status: 'available', stock: 'Jon', price: 200, img : 'https://ecomexpress.in/wp-content/uploads/2021/04/New-Project-2021-04-23T133156.011.png', name: 'BlueDart' },
  { id: 1, status: 'available', stock: 'Jon', price: 200, img : 'https://ecomexpress.in/wp-content/uploads/2021/04/New-Project-2021-04-23T133156.011.png', name: 'BlueDart' },

  { id: 2, status: 'available', stock: 'Cersei', price: 200 },
  { id: 3, status: 'available', stock: 'Jaime', price: 200 },
  { id: 4, status: 'available', stock: 'Arya', price: 200 },
  { id: 5, status: 'available', stock: 'Daenerys', price: 200 },
  { id: 6, status: 'available', stock: null, price: 200 },
  { id: 7, status: 'available', stock: 'Ferrara', price: 200 },
  { id: 8, status: 'available', stock: 'Rossini', price: 200 },
  { id: 9, status: 'available', stock: 'Harvey', price: 200 },
];

export default function DataTable() {
    const columns = [     
          {
          field: "product",
          headerName: "Avatar",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: 'stock', headerName: 'Name', width: 230 },
        { field: 'status', headerName: 'Status', width: 230 },
        {
          field: 'Email',
          headerName: 'Email',
       
          width: 200,
        },
        {
                field: "action",
                headerName: "Action",
                width: 250,
                renderCell: (params) => {
                  return (
                    <>
                      {/* <Link to={"/products/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                      </Link> */}
                      <DeleteOutlineOutlinedIcon
                        className="productListDelete"
                        // onClick={() => handleDelete(params.row.id)}
                      />
                    </>
                  );
                },
              },

      ];


  return (
    <div style={{ height: 380, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPpriceOp200={[5]}
        // checkboxSelection
      />
    </div>
  );
}
