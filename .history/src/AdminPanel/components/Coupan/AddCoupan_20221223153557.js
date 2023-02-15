import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const AddCoupan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [validFrom, setDate] = useState("");
  const [validTill, setD] = useState("");
  const [discount, setDiscount] = useState("");
  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/coupons/users/${id}`,
        {
          validFrom,
          validTill,
          discount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data)
      navigate(`/coupan/${id}`);
    } catch (err) {
      console.log(err);
    }

    alert("Coupan added Successfully");
  };

  return (
    <ContainerS>
      <h3>Add Coupans</h3>
      <Container style={{ width: "600px", marginTop: "5%" }}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Valid From</Form.Label>
            <Form.Control
              type="date"
              placeholder="12/03/2018"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Valid Till</Form.Label>
            <Form.Control
              type="date"
              placeholder="12/03/2034"
              onChange={(e) => setD(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="number"
              placeholder="14"
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="outline-primary">
            Submit
          </Button>
        </Form>
      </Container>
    </ContainerS>
  );
};

export default HOC(AddCoupan);
