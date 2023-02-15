import {Button, DialogActions, DialogContentText, TextField} from '@material-ui/core';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import React, { useState } from 'react'
import {useNavigate} from 'react-router'


const SubCategoriesList = () => {

    const [data,  setdata ] = useState([
        {
            name: 'Sub-Categorise1',
            id : 1
        }, {
            name: 'Sub-categories 2',
            id : 2,
        },
    ]);


    
    const [open, setOpen] = React.useState(false);
    // Edit data
    const [Editname, setEditname] = React.useState("");

    const handleClickOpen = (item) => {
        console.log("ITEM::::", item.name)
        setEditname(item.name)
        setOpen(true);
    };
    const [Editid, setEditid] = React.useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const Update = () =>{
        data.name = Editname;
        setdata([...data])

    }



    const navigate = useNavigate();

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sub-Categories Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody> {
                    data.map((item, index) => (
                        <tr>

                            <td>{
                                item.name
                            }</td>
                            <td>
                                <button type="button" className="btn btn-info "
                                    onClick={
                                        () => handleClickOpen(item)
                                }>Edit</button>
                                <button type="button" className="btn btn-danger"
                                    style={
                                        {margin: '0 10px'}
                                }>Delete</button>
                            </td>
                        </tr>
                    ))
                } </tbody>
            </table>

            <div>
                <Dialog open={open}
                    onClose={handleClose}>
                    <DialogTitle>Update</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Update Sub- Categories
                        </DialogContentText>
                        <TextField autoFocus placeholder='Enter Name' className="form-control-lg"
                            value={Editname}
                            onChange={
                                (e) => setEditname(e.target.value)
                            }/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={Update}>Update</Button>
                    </DialogActions>
                </Dialog>


            </div>


        </>
    )
}

export default SubCategoriesList
