import { TextField } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'

const MainContent = styled.div`
    width: 100%;
    padding: 20px;
  
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
width: 50%;
border: 1px solid lightblue;
 border-radius: 7px;
 padding: 10px;

 button{
   border: none;
   padding: 7px 26px;
   border-radius: 5px;
   background-color: #12ddca;
   color: #fff;
   cursor: pointer;
 }

`

const EditVehicle = () => {

  const location = useLocation();

  console.log('details::',location.state)

  const name = location.state.userName
  const mno = location.state.mno
//   const img = location.state.img
  const vNumber = location.state.vNumber
  const vtype = location.state.vehicleType


  return (
    <>
    <ContainerS>
        <MainContent>
            <Wrapper>
              <h5>Edit Vehicle Details :</h5>

          
                
                <TextField
                    label="Name"
                    id="outlined-size-small"
                    defaultValue={name}
                    size="small"
                    margin='dense'
                    />
                <TextField
                    label="Mobile No"
                    id="outlined-size-small"
                    defaultValue={mno}
                    size="small"
                    margin='dense'
                    />
                <TextField
                    label="Vehicle Type"
                    id="outlined-size-small"
                    defaultValue={vtype}
                    size="small"
                    margin='dense'
                    />
                <TextField
                    label="Vehicle Number"
                    id="outlined-size-small"
                    defaultValue={vNumber}
                    size="small"
                    margin='dense'
                    />

                    <button>Save</button>

            </Wrapper>
        </MainContent>
    </ContainerS>


    </>
  )
}

export default HOC(EditVehicle)