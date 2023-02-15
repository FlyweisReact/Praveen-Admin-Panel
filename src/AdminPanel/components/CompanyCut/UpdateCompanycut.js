import React from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const UpdateCompanycut = () => {
  const navigate = useNavigate();
  const [companyCut, setCom] = useState("");

  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `https://fast-auto-praveen.herokuapp.com/api/admin/companyCut`,
        {
          companyCut,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Company cut has been updated");
      navigate("/company");
    } catch (err) {
      console.log(err);
      alert('Invalid Data Format');
    }
  };

  return (
    <ContainerS>
      <h2>Update Vehicle Price</h2>
      <Container style={{ width: "600px", marginTop: "5%" }}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="companyCut">
            <Form.Label>Company Cut</Form.Label>
            <Form.Control
              type="text"
              placeholder="2"
              onChange={(e) => setCom(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </ContainerS>
  );
};

export default HOC(UpdateCompanycut);
