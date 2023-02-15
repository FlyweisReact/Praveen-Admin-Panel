import React from 'react'
import HOC from '../Common/HOC'
import {ContainerS, MainContainer} from '../Common/CommonStyling'
import styled from 'styled-components'
import { useLocation } from 'react-router'
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   

`
const Inputs = styled.div`
    width: 50%;
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    span{
        padding: 2px 10px;
        border: 1px solid blueviolet;
        margin: 5px 0;
    }

    button{
        padding: 5px 10px;
        width: 119px;
        border: none;
        background-color: #17a2b8;
        margin: 20px 0;
        cursor: pointer;
        color: #fff;

    }

    img{
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
`

const EditCustomer = () => {

    const location = useLocation();
    const name = location.state.userName;
    const email = location.state.email;
    const userID = location.state.userID;
    const img = location.state.img;
   

  return (
    <>
    <ContainerS>
        <MainContainer>      
            <Wrapper>
                     <h5>Edit Customer</h5>              
                <Inputs>
                    <img src={img} alt="" />
                    <input type='file' accept='image/*'/>

                    {/* TODO:  use onChange for update value*/}
                    
                    userName : <span contentEditable>{name} </span>
                    userID : <span contentEditable>{userID} </span>
                    Email : <span contentEditable>{email} </span>
                    <button >Save</button>
                </Inputs>
            </Wrapper>
        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(EditCustomer)