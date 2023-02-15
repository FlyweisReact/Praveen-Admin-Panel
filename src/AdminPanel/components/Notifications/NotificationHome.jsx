import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useNavigate } from 'react-router'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  
`
const DriverNotification = styled.div`
  width: 50%;
  padding: 10px;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 5px;
  min-height: 100px;
  margin: 5px 0;

  span{
    color: #5e5353;
  }

  h6{
    color: #dc7777;
    font-size: 0.791rem;
  }

  `

const Header = styled.div`
display: flex;
width: 100%;
height: 70px;
align-items: center;
border: 1px solid lightblue;
margin-bottom: 20px ;
border-radius: 4px;
justify-content: space-between;
padding: 0 20px;

span{
    
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
}
button{
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    color: #fff;
    background-color: #17a2b8;
}
`

const NotificationHome = () => {

  
  const navigate = useNavigate();
  return (
    <>
      <ContainerS>
      <Header>
            <span>All Notification
                     <span  onClick={() => navigate("/dashbord")} >/
                        Home
                    </span>
            </span> 
            <button onClick={() => navigate("/send-notificatin")}> Send Notification</button>
            </Header>

        <Wrapper>
          <DriverNotification>
            <span>Driver Notification</span>
            <ContentWrapper>
              <h6>Driver Id : <span># 4578899</span> </h6>
              <h6>Message : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi deserunt molestias delectus, eos tempora non! Culpa cumque laborum rerum nam ipsa ut corporis cum sapiente voluptates, sequi quibusdam molestias sed? Assumenda quia aut nemo, nihil dolore magni praesentium.</span>  </h6>

            </ContentWrapper>
            <ContentWrapper>
              <h6>Driver Id : <span># 4578899</span> </h6>
              <h6>Message : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi deserunt molestias delectus, eos tempora non! Culpa cumque laborum rerum nam ipsa ut corporis cum sapiente voluptates, sequi quibusdam molestias sed? Assumenda quia aut nemo, nihil dolore magni praesentium.</span>  </h6>

            </ContentWrapper>

          </DriverNotification>
          <DriverNotification>
            <span>User Notification</span>
            <ContentWrapper>
              <h6>User Id : <span># 4578899</span> </h6>
              <h6>Message : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi deserunt molestias delectus, eos tempora non! Culpa cumque laborum rerum nam ipsa ut corporis cum sapiente voluptates, sequi quibusdam molestias sed? Assumenda quia aut nemo, nihil dolore magni praesentium.</span>  </h6>

            </ContentWrapper>

          </DriverNotification>

        </Wrapper>
      </ContainerS>
    </>
  )
}

export default HOC(NotificationHome)