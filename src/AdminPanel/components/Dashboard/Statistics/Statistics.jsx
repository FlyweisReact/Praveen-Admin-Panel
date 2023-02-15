import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Charts1 from './Chart1'
import Chart2 from './Chart2'

const Containers = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
const SmallContainer= styled.div`
    width: 50%;
    cursor: pointer;  
    padding: 5px;
    @media screen and (max-width:768px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 100%;
    border: 1px solid lightblue;
    height: 300px;
    -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
position: relative;
border-radius: 5px;
h5{
    position: absolute;
    top: 10px;
    left: 20px;
}

`
const Statistics = () => {
  return (
    <>
        <Containers>
            <SmallContainer>
            <h5>Total Revenu</h5>
                <Wrapper>
                    <Link to='#'>
                     <Charts1/>
                    </Link>
                </Wrapper>
            </SmallContainer>
            <SmallContainer>
                <h5>Total User</h5>
                <Wrapper>
                    <Chart2/>                   
                </Wrapper>
            </SmallContainer>
        </Containers>
    
    </>
  )
}

export default Statistics