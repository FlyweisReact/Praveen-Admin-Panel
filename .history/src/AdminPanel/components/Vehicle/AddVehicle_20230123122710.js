import React from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddVehicle = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [pricePerKm, setPrice] = useState("");
  const [wheels, setWheels] = useState("");
  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/addVehicleType",
        {
          name,
          pricePerKm,
          wheels,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data)
      alert("Vehicle has been Created");
      navigate('/vehicle')
    } catch (err) {
      console.log(err);
      alert('Invalid Data');
    }
  };

  return (
    <>
      <ContainerS>
        <h2>Add Vehicle</h2>
        <Container style={{ width: "600px", marginTop: "5%" }}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="BMW..."
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pricePerKm">
              <Form.Label>Price per KM</Form.Label>
              <Form.Control
                type="number"
                placeholder="500"
                onChange={(e) => setPrice(e.target.value)}
                min={0}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wheels">
              <Form.Label>Wheels</Form.Label>
              <Form.Control
                type="number"
                placeholder="4"
                onChange={(e) => setWheels(e.target.value)}
                min={0}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wheels">
              <Form.Label>Day Charge</Form.Label>
              <Form.Control
                type="number"
                placeholder="4"
                onChange={(e) => setWheels(e.target.value)}
                min={0}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="wheels">
              <Form.Label>Night Charge</Form.Label>
              <Form.Control
                type="number"
                placeholder="4"
                onChange={(e) => setWheels(e.target.value)}
                min={0}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="wheels">
              <Form.Label>waiting </Form.Label>
              <Form.Control
                type="number"
                placeholder="4"
                onChange={(e) => setWheels(e.target.value)}
                min={0}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </ContainerS>
    </>
  );
};

export default HOC(AddVehicle);
