import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import Chart1 from '../Dashboard/Statistics/Chart1'
import Chart2 from '../Dashboard/Statistics/Chart2'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Wrapper = styled.div`
    width: 50%;
    padding: 10px;
    height: 400px;

    span{
        font-size: 1rem;
        font-weight: 600;
        color: #17a2b8;
        padding: 10px 0;
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

    span{
        padding: 0 20px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #17a2b8;
        display: flex;
        align-items: center;
    }
`

const Reports = () => {
  return (
    <>
    <ContainerS>
    <Header>
            <span>Reports/ 
                <Link to='/dashbord'> Home</Link>
             </span>
        </Header>

        <MainContainer>
            <Wrapper>
               <span> Total Revenu</span>
                <Chart1/>

            </Wrapper>
            <Wrapper>
                <span>Total User</span>
                <Chart2/>

            </Wrapper>

        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(Reports)