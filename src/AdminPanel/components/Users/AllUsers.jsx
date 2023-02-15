import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import User from './User'
import HOC from '../../Common/HOC';


function Complain(props) {

    const Container = styled.div`
    width: 100%;
    padding: 20px;
    `
    const MainContainer = styled.div`
    margin: 80px 0;
    width: 100%;

    h5{
        margin: 20px 0;
    }

    `
    const Header = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    border: 1px solid lightblue;
    margin-bottom: 20px ;
    border-radius: 4px;

    span{
        padding: 0 20px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #17a2b8;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    `
    const navigate = useNavigate();

    return (
        <Container>
            <MainContainer >  
                <Header>
                    <span>All Users
                        <span  onClick={() => navigate("/dashbord")} >/
                            Home
                        </span>
                    </span> 
                </Header> 
               <User/>                         
            </MainContainer>
        </Container>
    )
}



export default HOC(Complain)
