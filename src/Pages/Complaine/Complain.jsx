import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import ComplainTable from './ComplainTable'

const Complain = () => {
  return (
    <>
        <ContainerS>
            <MainContainer>
                <span>Complain List</span>
                <ComplainTable/>
                <ComplainTable/>
                <ComplainTable/>
               
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(Complain)

const MainContainer = styled.div`

span{
    font-size: 1.4rem;
    color: blue;
    margin: 20px 0;
}


`

