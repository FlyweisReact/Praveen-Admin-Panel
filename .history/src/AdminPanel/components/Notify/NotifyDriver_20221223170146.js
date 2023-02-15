
import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import {  useEffect } from "react";
import axios from "axios";


const NotifyDriver = () => {
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);
  
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
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    }, [token]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    const [title, setTitle] = useState("");
    const [message, setMes] = useState("");
    const [name, setName] = useState([]);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/users/notifications",
          {
            users: [name],
            title,
            message,
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        console.log(data);
        alert("Notification sended");
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <>
        <ContainerS>
          <h3>Add Notifucation for Driver</h3>
          <Container style={{ width: "600px", marginTop: "5%" }}>
            <Form onSubmit={submitHandler}>
              <select
                onChange={(e) => setName(e.target.value)}
                style={{ width: "300px", padding: "10px" }}
              >
                <option>Select Driver</option>
                {users.requiredUsers?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {i.name}{" "}
                  </option>
                ))}
              </select>
              <br />
              <br />
  
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
  

export default HOC(NotifyDriver)