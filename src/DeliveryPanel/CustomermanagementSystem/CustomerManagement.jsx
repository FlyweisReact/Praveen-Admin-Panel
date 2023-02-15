import React from 'react'
import { ContainerS, MainContainer } from '../Common/CommonStyling'
import HOC from '../Common/HOC'
import CustomerManageTable from './CustomerManageTable'

const CustomerManagement = () => {
  return (
    <>
    <ContainerS>
        <MainContainer>
          <span>Customer List</span>
            <CustomerManageTable/>
            <img src="" alt="" />
        </MainContainer>
    </ContainerS>

    </>
  )
}

export default HOC(CustomerManagement)