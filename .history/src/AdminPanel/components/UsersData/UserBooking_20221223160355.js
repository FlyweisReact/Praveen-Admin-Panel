/** @format */

import axios from "axios";
import React, { useCallback, useState } from "react";
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
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/users/${id}/bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data)
    } catch (err) {
      console.log(err);
    }
  }, [token , id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <>
      {data.bookings?.length === 0 ? (
      
      ) : (
        <ContainerS>
          <Alert>No Booking Found</Alert>
        </ContainerS>
      )}
    </>
  );
};

export default HOC(UserBooking);
