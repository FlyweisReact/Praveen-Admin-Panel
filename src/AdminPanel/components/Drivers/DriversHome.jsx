import React from 'react'
import HOC from '../../Common/HOC'
import {ContainerS} from '../../Common/CommonStyling'
import VendorList from './DiversList'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    border: 1px solid lightblue;
    margin-bottom: 20px ;
    border-radius: 4px;

    span{
        padding: 0 20px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #17a2b8;
        display: flex;
        align-items: center;
    }
`

const VendorsHome = () => {
  return (
    <>
    <ContainerS>
        <Header>
            <span>Driver Information / 
                <Link to='/dashbord'> Home</Link>
             </span>
        </Header>
        <VendorList/>
    </ContainerS>
    </>
  )
}

export default HOC(VendorsHome)