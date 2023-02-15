import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import PartnerListTable from './PartnerListTable'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogContents from './Dialog'

const Headers = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #188cc2;
  }
`

const DeliveryHome = () => {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
        <ContainerS>
            <Headers>
             <h5> Delivery Partners List</h5>
 
             <button   onClick={handleClickOpen}>Add Partner</button>
      
            </Headers>
            <PartnerListTable/>
        </ContainerS>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Add Partner
        </DialogTitle>
         <DialogContents/>     
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cencel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default HOC(DeliveryHome)