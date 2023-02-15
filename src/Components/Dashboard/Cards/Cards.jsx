import React from 'react'
import styled from 'styled-components'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import{ useNavigate} from 'react-router-dom'

const Container = styled.div`
width: 100%;

background-color: #f0f4fa;
border-radius: 10px;
padding: 20px;


`
const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    

`
const SmallCards = styled.div`
    width: 280px;
    height: 120px;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.75);
position: relative;
background-color: #96ecf2;
cursor: pointer;
margin-bottom: 30px;

span{
    position: absolute;
    left: 30px;
    top: 20px;
    color: #757a7a;
    font-size: 2.2rem;
    font-weight: 700;
}
h6{
    position: absolute;
   top: 80%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 1.2rem;
   font-weight: 700;
   color: green;
   z-index: 2;

    
}
img{
    width: 100px;
    position: absolute;
    right: 10px;
    bottom: 10px;
}

`

const Cards = () => {
    const navigate = useNavigate();
  return (
    <>
    <Container>
        <MainContent>
            <SmallCards  onClick={() => navigate("/all-product")}>
                <span>1999</span>
                <h6>Total Product</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>

            </SmallCards>
            <SmallCards style={{backgroundColor : '#99f8a5'}} onClick={() => navigate("/categories")}>
                <span>1999</span>
                <h6>Total category</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>

            </SmallCards>
            <SmallCards style={{backgroundColor : '#2ed8f3'}} onClick={() => navigate("/users")}>
                <span>1999</span>
                <h6>Total customers</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>

            </SmallCards>
            <SmallCards onClick={() => navigate("/users")}>
                <span>1999</span>
                <h6>New User</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>

            </SmallCards>
     
     
        </MainContent>

    </Container>

    </>
  )
}

export default Cards