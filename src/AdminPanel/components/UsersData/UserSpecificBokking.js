import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { useReducer } from "react";
import { Container, Form } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: false, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        bookingData: action.payload,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UserSpecificBokking = () => {
  const { userId, id } = useParams();

  const token = localStorage.getItem("token");

  const [{ loading, error, bookingData }, dispatch] = useReducer(reducer, {
    bookingData: [],
    loading: false,
    error: "",
  });

  useEffect(() => {
    const fethcData = async () => {
      const { data } = await axios.get(
        `https://fast-auto-praveen.herokuapp.com/api/admin/users/${userId}/bookings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    };
    fethcData();
  }, [axios, dispatch]);

  const data = bookingData?.requiredBooking;

  return (
    <ContainerS>
      <Container
        style={{
          width: "600px",
          height: "500px",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <h2>Specific Booking Data</h2>
        <Form style={{ marginTop: "5%" , marginBottom : '15%' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?._id}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.user}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pick up Address</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.pickAddress}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Drop Address</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.dropAddress}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Distance</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.distance}km{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Payment Method</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.paymentMode}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Vehicle Type</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.vehicleType}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fare</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.fare}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.status}{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Active</Form.Label>
            <p
              style={{
                border: "2px solid black",
                width: "60%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {" "}
              {data?.isActive ? 'Yes' : 'No'}{" "}
            </p>
          </Form.Group>
        </Form>
      </Container>
    </ContainerS>
  );
};

export default HOC(UserSpecificBokking);
