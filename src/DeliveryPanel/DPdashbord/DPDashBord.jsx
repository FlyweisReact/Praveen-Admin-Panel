import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../Common/HOC'
import styled from 'styled-components'
import Cards from '../../Components/Dashboard/Cards/Cards'
import Statistics from '../../Components/Statistics/Statistics'


const MainContainer = styled.div`
  margin: 80px 0;
  width: 100%;

`

const DPDashBord = () => {
  return (
    <>
    <ContainerS>
    <MainContainer >

      <Cards/>
      <Statistics/>
    
               
      </MainContainer>

    </ContainerS>
    </>
  )
}

export default HOC(DPDashBord)