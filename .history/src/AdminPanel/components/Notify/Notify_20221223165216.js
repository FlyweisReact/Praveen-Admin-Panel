import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { useReducer, useEffect } from "react";
import axios from "axios";


const Notify = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  const fetchData = async () => {

  };

  useEffect(() => {
   
    fetchData();
  }, [axios, dispatch]);


  const [title, setTitle] = useState("");
  const [message, setMes] = useState("");
  const [name, setName] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://fast-auto-praveen.herokuapp.com/api/admin/users/notifications",
        {
          users: [name],
          title,
          message,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
    alert("Notification has been created");
  };

  return (
    <>
      <ContainerS>
        <h3>Add Notifucation for Users</h3>
        <Container style={{ width: "600px", marginTop: "5%" }}>
          <Form onSubmit={submitHandler}>
            <p>Select User</p>
            {Users?.requiredUsers?.map((i) => (
              <>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Check
                    type="radio"
                    required
                    value={i._id}
                    label={i.fullName}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </>
            ))}
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="An other test notification"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="An other test notification"
                required
                onChange={(e) => setMes(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="outline-success">
              Submit
            </Button>
          </Form>
        </Container>
      </ContainerS>
    </>
  );
};

export default HOC(Notify);
