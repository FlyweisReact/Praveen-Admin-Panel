/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../Common/HOC";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { ContainerS } from "../../Common/CommonStyling";

const Penalty = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  // fetchUser ---
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/penlity",
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

  function MyVerticallyCenteredModal(props) {

    const [penlity , setP ] = useState("")

    const postHandler = async (e) => {
        e.preventDefault()
        try{
            const 
        }catch(err){
            console.log(err)
        }
    }

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
        <Modal.Body>
        <p>Add Penalty</p>
        <Form>
            <Form.Group>
                <Form.Label>Penalty</Form.Label>
                <Form.Control type='number' />
            </Form.Group>
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
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <h2>Penalty</h2>
        </div>

        <div
          style={{
            overflowX: "auto",
            marginTop: "2%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Penalty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.message?.map((i) => (
                <tr key={i._id}>
                  <td> {i.penlity} </td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => setModalShow(true)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(Penalty);
