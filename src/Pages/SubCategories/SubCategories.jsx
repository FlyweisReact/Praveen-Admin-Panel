import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import SubCategoriesList from './SubCategoriesList'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TextField } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SubCategories = () => {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Containers>
        <Headers>
        <h5>Sub-Categories List</h5> 
        <button onClick={handleClickOpen}>Add Categories</button>

        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <ContentWrapper>    
          <Wrapper>
          <List>
         
          <TextField id="outlined-basic" label="Sub-Component Name" variant="outlined" />
          </List>
          </Wrapper>     
          <Divider />        
        </ContentWrapper>
      </Dialog>
        </Headers>     
        <SubCategoriesList/>
      </Containers>
    </>
  )
}

export default HOC(SubCategories)

const Containers = styled.div`
    margin: 70px 20px;
    width: 100%;
    height: 650px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid lightgray;

    h5{
      margin: 20px 10px;
      font-size: 1.4rem;
      font-weight: 500;
      color: #569adf;
    }
    
`
const Headers = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1f1e1e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 3px;
  margin: 10px 0;

  button{
    padding: 6px 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
      background-color: #188cc2;
      color: #fff;
    }
  }
`

const ContentWrapper = styled.div`
  width:100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  margin: 30px 0;
`

const Wrapper= styled.div`
  width: 700px;
`