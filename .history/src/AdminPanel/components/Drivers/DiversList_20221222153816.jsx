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
import axios from 'axios';


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

        const token = (localStorage.getItem('token'));

        const [driverdata, setDriverdata] = useState([])

        let url = "https://we-fast-flyweis.herokuapp.com/driver/all"

        const ViewAllDriver = async()=>{

          let config = {
            headers : {"Authorization" : `Bearer ${token}` }
          }

          try{

              const data = await axios.get(url,config)

              setDriverdata(data.data.data.drivers)

              console.log('all-data:::',data.data.data.drivers)

          }catch(e){
            console.log("error::::",e)
          }

        }

        useEffect(()=>{
          ViewAllDriver()
        },[])

   
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

            {/* <------------header----------------> */}
      <thead class="thead-dark">
        <tr>
          {/* <th scope="col">#</th> */}
          <th scope="col">Images</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile No</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
      <tbody>
        {driverdata.map((item)=>(

        <tr key={item.id}>
          {/* <th scope="row">#{item.id}</th> */}
          <td>
            <img src={item.profileImage} alt="" style={style} />
          </td>
          <td>{item.name}</td>
          <td>{item.phoneNumber} </td>
          <td>
            <button onClick={handleClickOpen} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button>
            <button onClick={()=>navigate('/Edit-driver',{state:item})} style={{margin : '0 10px',border: 'none', cursor : 'pointer',backgroundColor: '#54ef9c', color:'#fff' }}>Edit</button>
            <button style={{border: 'none', cursor : 'pointer',backgroundColor: 'red', color:'#fff' }}>delete</button>
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
              <img style={{minWidth: '500px'}} src="
data:image/jpeg;base64,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              
              " alt="" />
          </Typography>
          <Typography gutterBottom>
            Driver Name :  Mr. d
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