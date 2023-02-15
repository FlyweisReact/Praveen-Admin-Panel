import React from 'react'
import { ContainerS, DailyRequestHeader } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'

import  DailyRequestTable from './DailyRequestTable'
const DailyRequest = () => {
  return (
    <>
        <ContainerS>
            <DailyRequestHeader>Daily Request List</DailyRequestHeader>
            <DailyRequestTable/>
        </ContainerS>
    </>
  )
}
export default HOC(DailyRequest)