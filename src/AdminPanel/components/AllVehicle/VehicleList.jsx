
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'


import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

let style = {
  width : '55px',
  height : '55px',
  border : '1px solid lightgray',
  borderRadius: '999px',
  
}



const VendorList = () => {

  //api

  const token = (localStorage.getItem('token'))

  let url = "https://we-fast-flyweis.herokuapp.com/vehicle/all"
  const [data, setdata] = useState([]);



  const Auth = {
    headers: {"Authorization" : `Bearer ${token}`}
  }

  const AllVehicle = async () =>{
   
    try{
      
    const res = await axios.get(url,Auth)
    setdata(res.data.data.vehicles)
    console.log('mydata::::::',res.data.data.vehicles)

    }catch(e){
      console.log('all error::::',e)
    }

  }

  const Delete = async ()=>{
    const res = await axios.delete(url,Auth)
    setdata(res.data.data.vehicles)

  }

  useEffect(()=>{

    AllVehicle();
    Delete();

  },[])



 
  const [Editid, setEditid] = React.useState("");

   
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const navigate = useNavigate()


  return (
    <>
      <table class="table">

        e{/* <-------header- */}
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
      
          <th scope="col">Name</th>
          <th scope="col">vehicleNumber</th>
          <th scope="col">vehicleType</th>
          <th scope="col">phone_number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
      <tbody>
        {data.map((item)=>(

        <tr key={item.id}>
          <th scope="row">{item.id} </th>
          <td>{item.name}</td>
          <td>{item.vehicleNumber}</td>
          <td>{item.vehicleType}</td>
          <td>{item.mno} </td>
          <td>
            <button onClick={handleClickOpen} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button>
            <button onClick={()=>navigate('/edit-vehicle',{state:item})} style={{margin : '0 10px',border: 'none', cursor : 'pointer',backgroundColor: '#54ef9c', color:'#fff' }}>Edit</button>
     
            {/* <button style={{border: 'none', cursor : 'pointer',backgroundColor: 'red', color:'#fff' }}>delete</button> */}
          </td>
        </tr>
        ))}
    
      </tbody>
    </table>

    {/* <----------Dialog Box ------------------> */}
    
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >   
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Driver Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
             <h6 style={{minWidth:'500px' , color: 'navajowhite'}}>
                  name : BMW
             </h6>
          </Typography>
          <Typography gutterBottom>
            VehicleType:  S Class
          </Typography>
          <Typography gutterBottom>
          vehicleNumber: 67897890B
          </Typography>
          <Typography gutterBottom>
           Mobile No : +91 600567890
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

     

    </>
  )
}

export default VendorList