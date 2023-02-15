import React from "react";
import { Container, Form } from "react-bootstrap";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import {  useNavigate } from "react-router";

const AddUser = () => {
  const navigate = useNavigate();

  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGen] = useState("");
  const [birthDate, setBirth] = useState("");
  const [password, setPass] = useState("");


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Not Supprted");
    }
  }

  function showPosition(position) {
    localStorage.setItem("latitude", position.coords.latitude);
    localStorage.setItem("longitude", position.coords.longitude);
  }

  const Lat = localStorage.getItem("latitude");
  const Long = localStorage.getItem("longitude");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/users",
        {
          fullName,
          email,
          phone,
          gender,
          birthDate,
          password,
          lngLat: [Lat, Long],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(`The user  ${fullName } is Created`);
      navigate("/user");
    } catch (err) {
      console.log(err);
      alert('Invalid Data')
    }
   
  };

  return (
    <>
      <ContainerS>
        <div>
          <h2>Add User</h2>
          <Container
            style={{
              width: "600px",
              marginTop: "5%",
              scrollBehavior: "smooth",
              overflow: "scroll",
              marginBottom: "15%",
            }}
          >
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ankit Singh"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="545451425"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ankit@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                required
                onChange={(e) => setGen(e.target.value)}
              >
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="11/09/2043"
                  required
                  onChange={(e) => setBirth(e.target.value)}
                />
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="1dsadas"
                  required
                  onChange={(e) => setPass(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Get Live Location</Form.Label>
                <br />
                <Button
                  variant="outline-info"
                  required
                  onClick={() => getLocation()}
                >
                  Give Location
                </Button>
                <br />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(AddUser);
