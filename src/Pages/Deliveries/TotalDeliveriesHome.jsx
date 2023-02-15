import React from 'react'
import styled from 'styled-components'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import TotalDelivery from './TotalDeliveryTable'

const Wrapper = styled.div`
    width: 100%;

    span{
      color: blueviolet;
      font-size: 1.4rem;
      font-weight: 600;
      padding: 20px 0;
    }

`

const DeliveriesHome = () => {
  return (
    <>
        <ContainerS>
          <Wrapper>
            <span>Total Delivery</span> 
            <TotalDelivery/>           
          </Wrapper>
        </ContainerS>
    </>
  )
}

export default HOC(DeliveriesHome)