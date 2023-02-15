import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Rating } from '@mui/material'

const MainContainers = styled.div`
width: 100%;
span{
    font-size: 1.3rem;
    font-weight: 600;
}

`
const Wrapper = styled.div`
    width: 100%;
    min-height: 100px;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    span{
        font-size: 0.9rem;
        color: #000;
        font-weight: 700;
    }
`
const ProductsDetails = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 80%;
        height: 80%;
        object-fit: contain;
        border: 1px solid lightblue;
         border-radius: 2px;
         padding: 3px;
    }
`

const Review = () => {
    const data = [
        {
            review : 'Quality is good and product is delivered as per description. Better to cuts the wallpaper in smaller size and paste it as it is little difficult to do by yourself Even it is not that perfect , the design hides any imperfections.',
            reviewHead : 'Good Product',
            reviewerId : 'Parl'
        },
        {
            review : 'Quality is good and product is delivered as per description. Better to cuts the wallpaper in smaller size and paste it as it is little difficult to do by yourself Even it is not that perfect , the design hides any imperfections.',
            reviewHead : 'Good Product',
            reviewerId : 'Parl'
        },
        {
            review : 'Quality is good and product is delivered as per description. Better to cuts the wallpaper in smaller size and paste it as it is little difficult to do by yourself Even it is not that perfect , the design hides any imperfections.',
            reviewHead : 'Good Product',
            reviewerId : 'Parl'
        },
        {
            review : 'Quality is good and product is delivered as per description. Better to cuts the wallpaper in smaller size and paste it as it is little difficult to do by yourself Even it is not that perfect , the design hides any imperfections.',
            reviewHead : 'Good Product',
            reviewerId : 'Parl'
        },
    ]

   const location = useLocation();

   console.log('location::',location.state)
   const img = location.state.img
   const rating = location.state.rating
   const review = location.state.review

  return (
    <>
    <ContainerS>
        <MainContainers>
            <span>Reviews</span>
                <ProductsDetails>
                    <img src={img} alt="" />
                        <div style={{margin: ' 10px  0'}}>
                            <div  style={{marginRight:'10px',}}>        
                                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly  color='gold' />
                            </div>                             
                        </div>
                </ProductsDetails>
                {data.map((items, index)=>(
                    <Wrapper key={index}> 
                    <span>
                         {items.reviewHead}
                    </span>      
                    <p>{items.review}</p>
                    <span>{items.reviewerId}</span>
                </Wrapper>
                ))}
            

        </MainContainers>
    </ContainerS>
    </>
  )
}

export default HOC(Review)