/** @format */

import React from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const UpdateVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pricePerKm, setPrice] = useState("");
  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/vehicleType/${id}`,
        {
          pricePerKm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      alert("Vehicle has been Updated successfully");
      navigate("/vehicle");
    } catch (err) {
      console.log(err);
      alert("Invalid Data");
    }
  };

  return (
    <>
      <ContainerS>
        <h3>Update Vehicle Price</h2>
        <Container style={{ width: "600px", marginTop: "5%" }}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="pricePerKm">
              <Form.Label>Price per KM</Form.Label>
              <Form.Control
                type="number"
                placeholder="500"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </ContainerS>
    </>
  );
};

export default HOC(UpdateVehicle);
