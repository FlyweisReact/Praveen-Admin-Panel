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
const ImageWrapper = styled.div`
display: flex;
flex-direction: column;

input{
  margin: 20px 0;
}
  

  img{
    width: 130px;
  height: 130px;
  border-radius: 999px;
  border: 1px solid lightgray;


  }

`

const EditDriver = () => {

  const location = useLocation();

  const name = location.state.name
  const mno = location.state.phoneNumber
  const img = location.state.profileImage


  return (
    <>
    <ContainerS>
        <MainContent>
            <Wrapper>
              <h5>Edit Driver Details :</h5>

                <ImageWrapper>
                  <img src={img} alt="" />

                  <input type="file" />

                </ImageWrapper>
                
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

                    <button>Save</button>

            </Wrapper>
        </MainContent>
    </ContainerS>


    </>
  )
}

export default HOC(EditDriver)