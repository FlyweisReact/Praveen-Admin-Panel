import React from 'react'
import { ContainerS } from '../../AdminPanel/Common/CommonStyling'
import HOC from '../Common/HOC'
import styled from 'styled-components'
import DataTable from './ServicesTable'

const MainContainer = styled.div`
width: 100%;
display: flex;
/* align-items: center; */
/* justify-content: center; */

`
const Wrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
border: 1px solid lightgray;
border-radius: 5px;
padding: 10px;
height: 300px;
span{
    text-align: center;
 
    margin: 20px 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: blue;
}

input, select{
    padding: 4px 10px;
    outline: none;
    margin: 10px 0;
}

button{
    width: 119px;
    border: none;
    padding: 5px 0;
    border-radius: 4px;
    color: #fff;
    background-color:#17a2b8;
}

`

const AddCategoriesServices = () => {
  return (
    <>
    <ContainerS>
        <MainContainer>
            <Wrapper>
                <span>Services & Categories</span>
            <lebel>Enter Services Name</lebel>
            <input type="text" placeholder='Services Name'/>
            <select name="" id="">

                <option value="">categories 1</option>
                <option value="">categories 2</option>
                <option value="">categories 3</option>
                <option value="">categories 4</option>
            </select>

            <button>Save</button>

            </Wrapper>
            <DataTable/>
           
           

        </MainContainer>
     
    </ContainerS>
    </>
  )
}

export default HOC(AddCategoriesServices)