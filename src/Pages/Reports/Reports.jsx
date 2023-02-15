import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { margin } from '@mui/system'

const Reports = () => {
  return (
    <>
        <ContainerS>
            <MainContainer>
                <h5>Reports List</h5>

                <ReportHolder>
                    <h6>Report Details :<h6></h6></h6>
                    <h6>Report By : <span>user582</span> </h6>
                    <h6>Report On : <span>Product 1</span> </h6>
                    <h6>Report Date: <span>12-03-2022</span> </h6>
                    <h6>Reported Store ID : <span> #3241</span> </h6>
                    <h6>Report Details : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iure.</span> </h6>
                    <button 
                    style={{right : '10px',bottom : '30px', position : 'absolute', borderRadius: '5px',
                    border: 'none',
                    padding: '8px 20px',color :' #fff', backgroundColor:'#f7a56d'
                
                }}>Send Warning</button>
                </ReportHolder>
            </MainContainer>

        </ContainerS>
    </>
  )
}

export default HOC(Reports)

const MainContainer = styled.div`
    width: 100%;

    h5{
        font-size: 1.4rem;
        color: blue;
        font-weight: 600;

    }

`
const ReportHolder = styled.div`
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 6px;
    margin: 10px 0;
    position: relative;

    h6{

        span{
            margin-left: 10px;
            color: red;
        }
    }

`