import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import VendorList from './VendorTable'

const Contents = styled.div`
    width: 100%;
    padding: 20px;
`

const VendorManagement = () => {
  return (
    <>
        <ContainerS>
            <Contents>
                <VendorList/>

            </Contents>
            
        </ContainerS>
    </>
  )
}

export default HOC(VendorManagement)