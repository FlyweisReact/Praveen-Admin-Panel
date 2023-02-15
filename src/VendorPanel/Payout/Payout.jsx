import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import styled from 'styled-components'
import PayoutList from './PayoutList'
import HOC from '../../Common/HOC'

const MainContainer = styled.div`
    width: 100%;

    span{
        font-size: 1.3rem;
        color: blue;
        font-weight: 600;
        
    }

`

const Payout = () => {
  return (
    <>
    <ContainerS>
        <MainContainer>
            <span>PayOut List</span>
            <PayoutList/>
        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(Payout)