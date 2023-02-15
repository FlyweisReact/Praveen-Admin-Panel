import axios from "axios";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import {  useParams } from "react-router";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../Common/HOC";
import { Alert } from "react-bootstrap";
import { Table } from "react-bootstrap";

const DriversBookings = () => {
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);
  
    const fetchData = useCallback(async () => {
      try {
        const { data } = await axios.get(
          `ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/drivers/${id}/bookings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }, [token, id]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    return (
      <>
        {data.bookings?.length === 0 ? (
          <ContainerS>
            <Alert>No Booking Found</Alert>
          </ContainerS>
        ) : (
          <ContainerS>
            <h3>View Drivers Booking's</h3>
  
            <div
              style={{
                overflow: "scroll",
              }}
            >
              <Table
                striped
                bordered
                hover
                style={{
                  marginTop: "2%",
                }}
              >
                <thead>
                  <tr>
                    <th>Pickup Address</th>
                    <th>Drop Address</th>
                    <th>Distance</th>
                    <th>Payment Method</th>
                    <th>Vehicle Type</th>
                    <th>Fare</th>
                    <td>Status</td>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.bookings?.map((i) => (
                    <tr key={i._id}>
                      <td> {i.pickupLocation} </td>
                      <td> {i.dropAddress} </td>
                      <td> {i.distance} </td>
                      <td> {i.paymentMode} </td>
                      <td> {i.vehicleType} </td>
                      <td> {i.fare} </td>
                      <td> {i.status} </td>
                      <td> {i.isActive ? "Yes" : "No"} </td>
                   
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </ContainerS>
        )}
      </>
    );
  };
  

export default HOC(DriversBookings)