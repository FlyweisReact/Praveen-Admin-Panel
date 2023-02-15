import React from 'react'
import { ContainerS, MainContainer } from '../Common/CommonStyling'
import HOC from '../Common/HOC'
import ConfirmationTavle from './ConfirmationTable'

const Confirmation = () => {
  return (
    <>
    <ContainerS>
        <MainContainer>
            <h5 style={{color:'blueviolet'}}>Completed Work List</h5>
            <ConfirmationTavle/>
        </MainContainer>
    </ContainerS>

    </>
  )
}

export default HOC(Confirmation)