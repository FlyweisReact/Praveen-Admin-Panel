import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router'
import HOC from '../../Common/HOC'
import SubCategoriesList from './SubcategoriesList'

const MainContainer = styled.div`
    width: 100%;
`
const Header = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    border: 1px solid lightblue;
    margin-bottom: 20px ;
    border-radius: 4px;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;

    span{
        
        font-size: 1.1rem;
        font-weight: 600;
        color: #17a2b8;
        display: flex;
        align-items: center;
    }
    button{
        border: none;
        padding: 6px 12px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;
    }
`

const Subcate = styled.div`
    margin: 20px 0;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 20px;
`

const ViewCategories = () => {
    const navigate = useNavigate();

    const location = useLocation()
  console.log("location",location.state)
  const destination = location.state.Destination;
  const name = location.state.name;
  const branch = location.state.prices;
  const image = location.state.image;
  return (
    <>
        <ContainerS>
         <Header>
            <span>Categories
                     <span  onClick={() => navigate("/dashbord")} >/
                        Home
                    </span>
            </span> 
            <button onClick={() => navigate("/add-subcategories")}>Add-SubCategorie</button>
            </Header>
            <MainContainer>
                <span>Name : {name}</span>

                
                <Subcate>
                <h5>Sub-Categories Name</h5>

                <SubCategoriesList/>     

                </Subcate>

                 
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(ViewCategories)