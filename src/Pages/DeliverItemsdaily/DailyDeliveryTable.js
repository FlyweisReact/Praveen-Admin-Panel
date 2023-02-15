import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';
import React from 'react'



const DailyDeliveryTable = () => {
    const [open, setOpen] = React.useState(false);
    // Edit data
    const [Editname, setEditname] = React.useState("");
    const [Editid, setEditid] = React.useState("");
    const [Editdataname, setEditdataname] = React.useState("");

    const handleClickOpen = (item, index) => {
        console.log("ITEM::::", item.name)
        setEditname(item.status)
        setEditid(index)
        setOpen(true);
    };

    const updtedata = () => {
        data[Editid].status = Editname;
        setOpen(false);
        setdata([... data])
    }

    const handleClose = () => {
        setOpen(false);
    };

    const [data,setdata]=   React.useState ([
        {
            id: 1,
            name: 'Ipad',
            price: '$1199',
            date: '12-03-2022',
            status: 'Delivery'
        }, {
            id: 2,
            name: 'Ipad',
            price: '$1199',
            date: '12-03-2022',
            status: 'Delivery'
        }, {
            id: 3,
            name: 'Ipad',
            price: '$1199',
            date: '12-03-2022',
            status: 'Delivery'
        }, {
            id: 4,
            name: 'Ipad',
            price: '$1199',
            date: '12-03-2022',
            status: 'Delivery'
        }
    ])


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delivery Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody> {
                    data.map((item, index) => (
                        <tr>

                            <td>{
                                item.name
                            }</td>
                            <td>{
                                item.price
                            }</td>
                            <td>{
                                item.date
                            }</td>
                            <td>{
                                item.status
                            }</td>

                            <td>
                                <button type="button" className="btn btn-info "
                                    onClick={
                                        () => handleClickOpen(item, index)
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
                            Update Status
                        </DialogContentText>
                        <TextField autoFocus placeholder='Enter Name' className="form-control-lg"
                            value={Editname}
                            onChange={
                                (e) => setEditname(e.target.value)
                            }/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={updtedata}>Update</Button>
                    </DialogActions>
                </Dialog>


            </div>


        </>
    )
}

export default DailyDeliveryTable
