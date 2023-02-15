import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'

const Containers = styled.div`
    width: 100%;
    border: 1px solid green;
    margin-top: 70px;
    overflow-y: auto;
    height: calc(100vh - 60px);
    overflow-x: hidden;
    padding: 10px;
`

const OrderDetails = () => {
  return (
    <>
        <Containers>
            

        </Containers>
    </>
  )
}

export default HOC(OrderDetails)