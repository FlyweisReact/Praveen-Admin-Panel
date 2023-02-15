import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 600px;
`
const Inputs = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:  20px 50px;
    width: 100%;
   
    input{
        width: 70%;  
    }
`

const DialogContents = () => {
  return (
    <div>
        <Container>
            <Inputs>
            <lebel>
                Name
            </lebel>
            <input type="text" />           
            </Inputs>
            <Inputs>
            <lebel>
               Details
            </lebel>
            <input type="text" />           
            </Inputs>
            <Inputs>
            <lebel>
               E-mail
            </lebel>
            <input type="email" />            
            </Inputs>
            <Inputs>
            <lebel>
              Mobile No
            </lebel>
            <input type="number" />            
            </Inputs>
            <Inputs>
         
            <input type="file" accept='image/*' />            
            </Inputs>
           
        </Container>
    </div>
  )
}

export default DialogContents