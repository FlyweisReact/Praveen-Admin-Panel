/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import editSvg from "../../Image/edit.svg";
import { Table, Form, Button, Modal } from "react-bootstrap";

const Term = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/terms`,
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

    const [address, setA] = useState("");

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.patch(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/support",
          {
            email,
            phone,
            address,
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
            Edit Terms&Condition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Terms&Condtion</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setA(e.target.value)}
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
          <h3>Terms&Condition</h3>
        </div>

        <Table striped bordered hover style={{ marginTop: "2%" }}>
          <thead>
            <tr>
              <th>Terms&Condition</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {data?.termsAndCondition?.terms} </td>

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

export default HOC(Term);
