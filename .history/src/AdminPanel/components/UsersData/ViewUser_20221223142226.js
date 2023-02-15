/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../../Common/HOC";
import { ContainerS } from "../../Common/CommonStyling";
import "./User.css";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useReducer } from "react";

const ViewUser = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const user = data.user;

  console.log(user);

  return (
    <>
      <ContainerS>
        <h2>UserData </h2>

        <div className="info">
          <img
            src={
              user?.image
                ? `https://fast-auto-praveen.herokuapp.com/${user?.image}`
                : "https://www.sideshow.com/storage/product-images/903421/iron-man_marvel_silo.png"
            }
            alt={user?.fullName}
            style={{
              position: "absolute",
              height: "400px",
              marginLeft: "600px",
              marginTop: "20px",
            }}
          />
          <h6>ID</h6>
          <p> {user?._id} </p>
          <h6> FullName </h6>
          <p>{user?.fullName}</p>
          <h6>Contact Number</h6>
          <p>{user?.phone}</p>
          <h6>Email</h6>
          <p>{user?.email}</p>
          <h6>Gender</h6>
          <p>{user?.gender}</p>
          <h6>Date of Birth</h6>
          <p>{user?.birthDate}</p>
          <h6>Role</h6>
          <p>{user?.role}</p>
          <h6>Bolcked</h6>
          <p>{user?.isBlocked ? "Yes" : "No"}</p>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(ViewUser);
