/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import editSvg from "../../Image/edit.svg";
import { Table, Form, Button , Modal } from "react-bootstrap";

const Info = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/support`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  function MyVerticallyCenteredModal(props) {
    const [privacyPolicy, setC] = useState("");

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.patch(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/privacy-policy",
          {
            privacyPolicy,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Support-Info edited Successfully");
        fetchData();
        setModalShow(false);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Support Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Privacy Policy</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setC(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }




  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ContainerS>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Support Info</h3>
        </div>

        <Table striped bordered hover style={{ marginTop: "2%" }}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {data?.email} </td>
              <td> {data?.phone} </td>
              <td> {data?.email} </td>
              <td>
                <img
                  src={editSvg}
                  alt=""
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "100%",
                    width: "30px",
                    padding: "5px",
                    height: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => setModalShow(true)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </ContainerS>
    </>
  );
};

export default HOC(Info);
