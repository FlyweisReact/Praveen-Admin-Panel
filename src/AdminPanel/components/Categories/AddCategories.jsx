import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Label } from '@material-ui/icons'
import { useNavigate } from 'react-router'

const MainCategories = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightblue;
    border-radius: 4px;
    padding: 20px;
    flex-direction: column;

    button{
        padding: 6px 15px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;

    }
`
const Inputs = styled.div`
    width: 50%;

`
const CheckBoxs = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`
const Header = styled.div`
display: flex;
width: 100%;
height: 70px;
align-items: center;
border: 1px solid lightblue;
margin-bottom: 20px ;
border-radius: 4px;
cursor: pointer;

span{
    padding: 0 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
    cursor: pointer;
}
`

const AddCategories = () => {
    const navigate = useNavigate();

  return (
    <>
    <ContainerS>
        <Header>
                    <span>All Users
                        <span  onClick={() => navigate("/dashbord")} >/
                            Home
                        </span>
                    </span> 
                </Header> 
        <MainCategories>
            
            <Inputs>
            <TextField fullWidth label="Categories Name" id="fullWidth" />
            </Inputs>

            <CheckBoxs>
            <FormControlLabel control={<Checkbox  />} label="Public" />
            <FormControlLabel control={<Checkbox  />} label="Private" />

            </CheckBoxs>
            <button>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(AddCategories)