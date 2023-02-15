
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./productList.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import styled from 'styled-components'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const SelectContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  select{
    width: 70%;
    padding: 5px;
    outline-color: lightblue;
    color: #8a8888;
  }
`

const rows = [
  { id: 1,  CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 12, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 13, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 14, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 15, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 16, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 17, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },
  { id: 18, CustomerID: '#35267s8ws ',status: 'Pending', address: 'New Delhi 110091', price: 200, img : 'https://cdn.shopify.com/s/files/1/1859/8979/files/product-1-red-shoe_150x150.png?v=1628116666', name: 'shoes' },

];

export default function DataTable() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const columns = [
       
          {
          field: "product",
          headerName: "Product",
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
        { field: 'address', headerName: 'Address', width: 230 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'CustomerID', headerName: 'Customer ID', width: 150 },
        {
          field: 'price',
          headerName: 'Prices',
       
          width: 200,
        },
        {
                field: "action",
                headerName: "Action",
                width: 250,
                renderCell: (params) => {
                  return (
                    <>
                      <button className="productListEdit" onClick={handleClickOpen}>Edit</button>
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

    <>
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPpriceOp200={[5]}
      
      />
    </div>

    <div>
      <Dialog 
          width = {'md'}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Change Status"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <SelectContainer>
              <select>
                <option>pending</option>
                <option>Declined</option>
                <option>delivered</option>
              </select>

              </SelectContainer>
        
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cencle</Button>
            <Button onClick={handleClose}>Update</Button>
          </DialogActions>
        </Dialog>
    </div>

    </>
  );
}
