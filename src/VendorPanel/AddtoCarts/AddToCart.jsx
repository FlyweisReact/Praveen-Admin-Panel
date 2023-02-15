import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import AddTocartList from './AddToCartCuslomerList'

const Headers = styled.div`
    width: 100%;
    height: 70px;
    font-size: 1.1rem;
    color: darkgray;
`
const Wrapper = styled.div`
    width: 100%;
`

const AddToCart = () => {
  return (
    <>
    <ContainerS>
        <Headers>
            Customers Add to Cart
        </Headers>
        <Wrapper>
            <AddTocartList/>
        </Wrapper>
    </ContainerS>
    </>
  )
}

export default HOC(AddToCart)