import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../Common/HOC'
import styled from 'styled-components'

import TaskTable from './TasksTable'


const MainContainer = styled.div`
    width: 100%;
    height: 640px;
`

const ConfirmTask = () => {
  return (
    <>
        <ContainerS>
            <MainContainer>
              <span>Update Works</span>
                <TaskTable/>
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(ConfirmTask)