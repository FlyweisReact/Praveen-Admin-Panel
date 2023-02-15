import React from 'react'
import HOC from '../Common/HOC'
import styled from 'styled-components'
import DailyDeliveryTable from './DailyDeliveryTable'


const VendorDeliverItemDaily = () => {
  return (
    <>
        <Containers>
          <Headers>
            <span>Today Delivery Orders List</span>
          </Headers>
           <DailyDeliveryTable/>
        </Containers>
    </>
  )
}

export default HOC(VendorDeliverItemDaily)

const Containers = styled.div`
    width: 100%;
    margin: 70px 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 80vh;
    padding: 20px;
`

const Headers = styled.div`
  width: 100%;
  margin: 20px 0;

span{

  font-size: 1.3rem;
  font-weight: 600;
  color: #188cc2;
}
`