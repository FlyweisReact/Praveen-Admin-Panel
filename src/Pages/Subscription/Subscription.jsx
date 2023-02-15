import React from 'react'
import styled from 'styled-components'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import SubTable from './SubTable'

const Subscription = () => {
  return (
    <>
    <ContainerS>
        <Headers>
            <span>Subscriptions </span>
           
        </Headers>
        <Wrapper>
            <lebel>Plane Name</lebel>
            <input type="text" />
            <lebel>Durations</lebel>
            <input type="text" placeholder='Plane Duration'/>
            <lebel>Price</lebel>
            <input type="number" />

            <button>Save</button>

        </Wrapper>
        <TableWrapper>
            <SubTable/>

        </TableWrapper>
        
    </ContainerS>

    </>
  )
}

export default HOC(Subscription)

const Headers = styled.div`
    width:100%;
    height: 70px;
    span{
        font-size: 1.4rem;
        font-weight: 500;
    }
`
const TableWrapper = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 8px;
`

const Wrapper = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    input{
        width: 50%;
        padding:3px 10px;
        outline: none;
        border-radius: 3px;
    }
    button{
        width: 118px;
        padding: 8px 0;
        border: none;
        border-radius: 2px;
        background-color: #000;
        color: #fff;
        margin: 20px 0;
        cursor: pointer;
    }
`