import React, { useEffect, useState } from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import axios from 'axios'
import Nodata from '../../Common/Nodata'

const MainContainers = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(74,70,74,1);
  -moz-box-shadow: 2px 3px 5px 0px rgba(74,70,74,1);
  box-shadow: 2px 3px 5px 0px rgba(74,70,74,1);

`
const Contents = styled.div`
  padding: 10px;
  border: 1px solid lightblue;
  display: flex; 
  width: 100%;
  border-radius: 5px;

`
const Wrapper = styled.div`    
    display: flex;
    margin: 0 10px;
    min-width: 15%;   
  span{
    font-size: 1rem;
    color: #062c4e;  
  }  
`
const UperPart = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 7px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
`

const DriverBooking = () => {

    const location = useLocation()
    const userId = location.state.id
    const [id, setid] = useState(userId)
    // console.log("UserId",id)
    const [booking, setbooking] = useState([])
    console.log(booking)
    // api calls ===>
    const config = {
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
    }
    const GetDriverBooking = async () => {
        const res = await axios.get(`https://we-fast-flyweis.herokuapp.com/booking/driver/${id}`,config)  
        setbooking(res.data.data.bookings) 
            
    }
    useEffect(() => {
        GetDriverBooking()
    } , [])

  return (
    <>
        <ContainerS>
          {booking.length > 0 ? booking.map((booking, index) => {
            return (
              <MainContainers key={booking.id}>
              <UperPart>
                <h6>vehicleType : ECO <span></span></h6>
                <h6>pickupAddress : {booking.pickupAddress}<span></span></h6>
                <h6>dropAddress : {booking.dropAddress} <span></span></h6>
                <h6>Status :{booking.status} <span></span></h6>           
              </UperPart>
            <Contents>
                <Wrapper>
                  <span>receiverDetails : </span>
                </Wrapper>
                <Wrapper>
                      Name :  {booking.receiverDetails.name} <br />
                      Phone No :{booking.receiverDetails.phone_number} <br />
                </Wrapper>
            </Contents>
            <Contents>
                <Wrapper>
                  <span>Sender Details : </span>
                </Wrapper>
                <Wrapper>
                      Name :  {booking.senderDetails.name} <br />
                      Phone No :{booking.senderDetails.phone_number} <br />
                </Wrapper>
            </Contents>
            <Contents>
                <Wrapper>
                  <span>Details : </span>
                </Wrapper>
                <Wrapper>
                       loadWeight :  {booking.loadWeight} <br />
                       notes  : {booking.notes} <br />
                       labour Needed :   {booking.labourNeeded == true ? 'Yes': 'No' } <br />  
                       paidBy : {booking.paidBy} <br />  
                       bookingType : now <br />  
                </Wrapper>
            </Contents>
            <Contents>
            <Wrapper>
                  <span>driver Details : </span>
                </Wrapper>
                <Wrapper>
                      Name : {booking.user.name} <br />
                      {/* Phone No : 998789000 */}
                </Wrapper>
            </Contents>
          </MainContainers>
            )
          }) : <Nodata/> }
          

        </ContainerS>
    </>
  )
}

export default HOC(DriverBooking)