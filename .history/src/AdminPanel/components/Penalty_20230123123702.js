/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../Common/HOC";
import { Button , Container , Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import { ContainerS } from "../../Common/CommonStyling"

const Driver = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [id, setID] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const  [ open , setOpen] = useState(false)

  // fetchUser ---
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/allDrive",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [fetchData]);

  const blockHandler = async (e) => {
    try {
      const { data } = await axios.put(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/drivers/${id}/block`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(data.message);
      fetchData();
      setModalShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <p style={{ fontSize: "2rem" }}> Block Driver ?</p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button onClick={props.onHide}>No</Button>
            <Button onClick={() => blockHandler()} variant="outline-success">
              Yes
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }


const Penalty = () => {
  return (
    <div>Penalty</div>
  )
}

export default (Penalty)