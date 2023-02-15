import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../Common/HOC'
import styled from 'styled-components'
import WorkDoneTable from './WorkDoneTable'

const MainContainer = styled.div`
    width: 100%;
    height: 640px;
`

const WorkDoneUpdte = () => {
  return (
    <>
        <ContainerS>
            <MainContainer>
              <span>Update Works</span>
                <WorkDoneTable/>
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(WorkDoneUpdte)