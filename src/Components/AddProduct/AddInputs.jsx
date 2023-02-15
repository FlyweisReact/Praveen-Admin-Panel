import React from 'react'
import styled from 'styled-components'

const Conatainer = styled.div`

width: 100%;

display: flex;
justify-content: center;

`

const Inputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;

input{
  width: 50%;
  padding:5px 10px ;
  border-radius: 10px;
  outline: none;
  border: 1px solid lightgray;
}
lebel{
  margin: 10px 0;
}

button{
  width: 188px;
  padding: 6px 0;
  border: none;
  cursor: pointer;
  margin: 30px 0;
}

`

const AddInputs = () => {
  return (
    <>
        <Conatainer>
            <Inputs>
            <lebel>
                Product Name
            </lebel>
            <input type="text" />       
            <lebel>
                Categories
            </lebel>
            <input type="text" />       
            <lebel>
               Product Images
            </lebel>
            <input type="file" /> 

            <button>Submit</button>      
            </Inputs>
        </Conatainer>

    </>
  )
}

export default AddInputs