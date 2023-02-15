import React from 'react'
import styled from 'styled-components'
import HOC from '../../Common/HOC'

const EditContainer = styled.div`
width: 100%;
margin: 70px 0;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    input{
        width: 50%;
        padding: 5px 10px;
        margin: 7px 0;
        outline: none;
        border-radius: 3;
    }

    button{
        width: 177px;
        padding: 5px 0;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        margin-top: 20px;
    }

`
const EditHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin:0 20px;
`

const EditProduct = () => {
  return (
    <>
        {/* <EditHeader>
        <span>Edit Product</span>
        </EditHeader> */}
        <EditContainer>
           
            <Inputs>
                <lebel>Name</lebel>
                <input type="text" />
                <lebel>Descriptions</lebel>
                <input type="text" />
              
                <lebel>price</lebel>
                <input type="number" />
              
               
                <input type="file" />

                <button>Update</button>
            </Inputs>

        </EditContainer>
    </>
  )
}

export default HOC(EditProduct)