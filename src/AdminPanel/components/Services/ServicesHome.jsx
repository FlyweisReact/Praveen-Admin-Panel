import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import styled from 'styled-components'
import HOC from '../../Common/HOC'
import ServicesList from './ServicesList'
import { Checkbox, FormControlLabel } from '@mui/material'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;



`
const Inputs = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    button{
        padding: 6px 15px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;
        margin: 20px 0;
        width: 188px;

    }

    input{
        width: 100%;
        padding: 10px;
        outline: none;
        border-radius: 10px;
        
    }
`
const ServicesTable = styled.div`
    width: 100%;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;

    span{
        padding: 20px 0;
        font-size: 1.1rem;
        color: #17a2b8;
        font-weight: 600;
    }

`

const ServicesHome = () => {
  return (
    <>
    <ContainerS>
        <MainContainer>
            <Inputs>

            <span>Ctreate Services</span>
            <input type="text" placeholder='Enter Services Name' /> 
            <FormControlLabel control={<Checkbox  />} label="Public" />
            <FormControlLabel control={<Checkbox  />} label="Private" />
            
            <button>Save</button>
            </Inputs>
            <ServicesTable>
                <span>Services List</span>
                <ServicesList/>
            </ServicesTable>
        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(ServicesHome)