import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useLocation } from 'react-router'

const Headers = styled.div`
    width: 100%;
    height: 70px;
    font-size: 1.1rem;
    color: darkgray;
`
const ProductDetailsView= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 10px;
`
const SmallContainers = styled.div`
    width: 130px;
    height: 150px;
    border: 1px solid lightgray;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    span{
        font-size: 0.79rem;
        text-align: center;
        font-weight: 600;
    }

    
`

const Image = styled.div`
    width: 100%;
    height: 70%;
    img{
        width: 100%;
        height: 100%;
    }
`

const ViewCustomerProduct = () => {

    const location =  useLocation();
    console.log('location:::',location.state)
    const user = location.state.name


    const data = [
        {
        name : 'macbook',
        img : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1632948896000',
        price : '$999',
    },
        {
        name : 'Airpod',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52P5oGSIbgahfguBrvsHwsDcb8hDWjJj4C-g6gNPay5nDThtngjkfO3hZ6C3kYPw_HC8&usqp=CAU',
        price : '$ 456',
    },
        {
        name : 'Airpod',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52P5oGSIbgahfguBrvsHwsDcb8hDWjJj4C-g6gNPay5nDThtngjkfO3hZ6C3kYPw_HC8&usqp=CAU',
        price : '$ 456',
    },

    ]
  return (

    
    <>
        <ContainerS>
            <Headers>
                Customer Cart
            </Headers>
            <span>Customer Id : {user}</span>

            <ProductDetailsView>
                
                {data.map((elm, index)=>(

                <SmallContainers>
                    <Image>
                    <img src={elm.img} alt="" />
                    </Image>
                    <span>{elm.name} </span>
                    <span>Price : {elm.price} </span>

                </SmallContainers>
                ))}
            </ProductDetailsView>
        </ContainerS>
    </>
  )
}

export default HOC(ViewCustomerProduct)