import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import Chart1 from '../../Components/Statistics/Chart1'
import Chart2 from '../../Components/Statistics/Chart2'


const Comtainers = styled.div`
    margin: 70px 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;


`
const SmallContainers = styled.div`
    width: 500px;
    height: 400px;
    border: 1px solid lightblue;
    border-radius: 3;

    h5{
        margin: 5px 0;
    }
`

const Statistics = () => {
  return (
    <>
    
    <Comtainers>
        <SmallContainers>
        <h5>Tota Revenu Statistics</h5>
            <Chart1/>
        </SmallContainers>
        <SmallContainers>
        <h5> Total Customer Statistics</h5>
            <Chart2/>
        </SmallContainers>
    </Comtainers>
    </>
  )
}

export default HOC(Statistics)