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
import { Link, useNavigate } from 'react-router-dom';
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
import CategoriesList from './CategoriesList';




function Complain(props) {
    const [EditDailogOpen, setEditDailogOpen] = useState("")
    const navigate = useNavigate();
    const classes = useStyles();

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
        align-items: center;
        justify-content: space-between;

        button{
            border: none;
            padding: 5px 10px;
            border-radius: 3px ;
            cursor: pointer;
            color: #fff;
            background-color: #000;
        }
    `

    return (
        <Container>
            <MainContainer >  
                <Header>
                    <h5>Categories</h5> 
                    {/* <Link to='/add-product'> <button>Create Categorie</button></Link>              */}
                </Header>   
                <CategoriesList/>                
            </MainContainer>
        </Container>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

});

export default HOC(Complain)
