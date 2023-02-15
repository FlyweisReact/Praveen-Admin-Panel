import axios from "axios";
import React from "react";
import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Alert, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";



const UserBooking = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
  
    fetchData();
  }, [axios, dispatch]);
  return (
    <>
      {Booking.bookings?.[0]?._id ? (
        <ContainerS>
          <h2>View User Bookings</h2>

          <div
            style={{
              height: "500px",
              overflow: "scroll",
            }}
          >
            <Table
              striped
              bordered
              hover
              style={{
                marginTop: "5%",
              }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UserId</th>
                  <th>Pickup Address</th>
                  <th>Drop Address</th>
                  <th>Distance</th>
                  <th>Payment Method</th>
                  <th>Vehicle Type</th>
                  <th>Fare</th>
                  <td>Status</td>
                  <th>Active</th>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {Booking?.bookings?.map((i) => (
                  <tr key={i._id}>
                    <td> {i._id} </td>
                    <td> {i.user} </td>
                    <td> {i.pickAddress} </td>
                    <td> {i.dropAddress} </td>
                    <td> {i.distance} </td>
                    <td> {i.paymentMode} </td>
                    <td> {i.vehicleType} </td>
                    <td> {i.fare} </td>
                    <td> {i.status} </td>
                    <td> {i.isActive ? "Yes" : "No"} </td>
                    <td>
                      <Button
                        variant="outline-info"
                        onClick={() =>
                          navigate(`/booking/${id}/booking/${i._id}`)
                        }
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ContainerS>
      ) : (
        <ContainerS>
          <Alert>No Booking Found</Alert>
        </ContainerS>
      )}
    </>
  );
};

export default HOC(UserBooking);
