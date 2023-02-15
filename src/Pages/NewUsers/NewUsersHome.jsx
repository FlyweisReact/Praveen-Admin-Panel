import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { ContainerS } from '../../Common/CommonStyling'
import NewUserTable from './NewUserTable'
const NewUsersHome = () => {
  return (
    <>
        <ContainerS>
            <NewUserTable/>
        </ContainerS>
    </>
  )
}

export default HOC(NewUsersHome)