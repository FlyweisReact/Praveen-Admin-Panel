import React, { useEffect, useState } from 'react'
import { ContainerS } from '../../AdminPanel/Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useLocation } from 'react-router'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 7px;
    justify-content: space-between;
    
`

const ViewPayOut = () => {
useEffect(() => {
    window.scrollTo(0,0);

 
  
}, [])


    const location = useLocation()
    
    const destination = location.state.Destination;
    const orderID = location.state.orderID;

    const [data, setdata] = useState(location.state)
    console.log("location",data)

    const name = data.status
    console.log('name', name)
   
    // const image = location.state.image;
  
  return (
    <>
    <ContainerS>
        <span>Payout Details</span>
        <MainContainer>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Recever</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
               
                    <tr>
                    <th scope="row">1</th>
                    <td>#34567</td>
                    <td>paid</td>
                    <td>$ 567</td>
                    </tr>

               
                
               
            </tbody>
            </table>


        </MainContainer>      
    </ContainerS>
    </>
  )
}

export default HOC(ViewPayOut)