import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  margin-top: 65px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid ;

 p, span{
    padding: 3px 10px ;
    border: 1px solid lightblue;
    outline-color: blueviolet;
  }


`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
  cursor: pointer;
`

const SmallContainer = styled.div`
  width: 230px;
  height: 300px;
  border: 1px solid lightgray;
  border-radius: 2px;
  position: relative;
  
`

const Name = styled.div`
  width: 100%;
  text-align: center;
`
const Images = styled.div`
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  
  }
`

const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5{
    padding: 8px;
  }

  button{
    border: none;
    padding: 5px 20px;
    color: #fff;
    background-color: #188cc2;
    cursor: pointer;
    outline: none;
   
  }


 
`

const ProductsDetails = () => {

  const location = useLocation()
  console.log("location",location.state)
  const destination = location.state.Destination;
  const name = location.state.name;
  const branch = location.state.prices;
  const image = location.state.image;

  return (
    <>
      <Container>
        <Wrapper>
          <SmallContainer>
            <Images>
                <img src={image} alt="" />
            </Images>        
          </SmallContainer>
        </Wrapper>
        <Name >Product Name : <span contenteditable="true">{name}</span> </Name>      
        <DescriptionBox>
        <h5 >Prices : <span contenteditable="true"> {branch} </span></h5>
        <h5 >Descriptions</h5>
        <p contenteditable="true">
          Apple AirPods (2nd Gen)
        </p>
        <button>Save</button>
        </DescriptionBox>

      </Container>
    </>
  )
}

export default HOC(ProductsDetails)