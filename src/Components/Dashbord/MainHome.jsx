import React from 'react';
//material ui data table
import { Card, Grid, Button, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";




import { useNavigate } from 'react-router-dom';
//dialog box
import {

    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";
import { useState } from 'react';


import { alertTitleClasses } from '@mui/material';


import styled from 'styled-components';
import HOC from '../../Common/HOC';
import Cards from '../Dashboard/Cards/Cards';
import ProductList from '../ProductList/ProductList';
import Statistics from '../Statistics/Statistics';


function Complain(props) {
    
    const Container = styled.div`
    width: 100%;
    padding: 20px;
    height: 700px;
    overflow-y: auto;
    overflow-x: hidden;

        
    `
    const MainContainer = styled.div`
    margin: 80px 0;
    width: 100%;

    `

const Wrapper = styled.div`
border: 1px solid #c6c6cc;
padding: 10px;
margin: 10px;
border-radius: 10px;

h4{
    margin: 20px 0;
}

`



    return (
        <Container>
            <MainContainer >

                <Cards/>
                <Wrapper>
                    <h4>Recent Products</h4>
                        <ProductList/>
                </Wrapper>             
                <Statistics/>
            </MainContainer>
        </Container>
    )
}



export default HOC(Complain)
