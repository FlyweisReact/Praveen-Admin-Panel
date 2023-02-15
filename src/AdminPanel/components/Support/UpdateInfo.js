import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

const UpdateInfo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        "https://fast-auto-praveen.herokuapp.com/api/admin/support",
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/info");
    } catch (err) {
      console.log(err);
    }

    alert("Support-Info Updated");
  };
  return (
    <>
      <ContainerS>
        <h3>Update Support Info</h3>
        <Container style={{ width: "600px", marginTop: "5%" }}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="outline-primary">
              Submit
            </Button>
          </Form>
        </Container>
      </ContainerS>
    </>
  );
};

export default HOC(UpdateInfo);
