/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

let style = {
  width: "55px",
  height: "55px",
  border: "1px solid lightgray",
  borderRadius: "999px",
};

const VendorList = () => {
  const [driverdata, setDriverdata] = useState([]);

  //  All Drivers
  const ViewAllDriver = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/allDrive"
      );
      setDriverdata(data);
    } catch (e) {
      console.log("All Driver err =>", e);
    }
  };

  useEffect(() => {
    ViewAllDriver();
  }, []);


  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {driverdata?.driver?.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={
                    item.image
                      ? item.image
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pg7njRUvR2n1O3mGUrm8EgSU56yP5LsSxg&usqp=CAU"
                  }
                  alt=""
                  style={style}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.phone} </td>
              <td>{item.email} </td>
              <td>{item.gender} </td>
             
            </tr>
          ))}
        </tbody>
      </table>

   </>
  );
};

export default VendorList;
