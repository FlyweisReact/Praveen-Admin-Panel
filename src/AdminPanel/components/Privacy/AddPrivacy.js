import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

const AddPrivacy = () => {
    const navigate = useNavigate()
  const [privacyPolicy, setP] = useState("");
  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        "https://fast-auto-praveen.herokuapp.com/api/admin/privacy-policy",
        {
          privacyPolicy,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/privacy')
    } catch (err) {
      console.log(err);
    }

    alert('Privacy Policy Updated')
  };

  return (
    <>
      <ContainerS>
        <h3>Add Privacy Policy</h3>
        <Container style={{ width: "600px", marginTop: "5%" }}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Privacy Policy</Form.Label>
              <Form.Control
                type="text"
                placeholder="This is privacy "
                onChange={(e) => setP(e.target.value)}
                required
              />
            </Form.Group>
            <Button  type ='submit' variant="outline-primary">Submit</Button>
          </Form>
        </Container>
      </ContainerS>
    </>
  );
};

export default HOC(AddPrivacy);
