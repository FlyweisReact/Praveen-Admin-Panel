/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../../Common/HOC";
import { ContainerS } from "../../Common/CommonStyling";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const UserData = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);


  // fetchUser ---

  const fetchData = useCallback(async() => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/users",
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
  },[token])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ContainerS>
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <h2>All Users</h2>
          <Button variant="outline-dark" onClick={() => navigate("/addUser")}>
            Add Users
          </Button>
        </div>
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
                <th>Avatar</th>
                <th>ID</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Contact NO.</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Blocked</th>
                {/* <th></th> */}
                <th>Bookings</th>
                <th>Coupons</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.requiredUsers?.map((i) => (
                <tr key={i._id}>
                  <td> {i.fullName} </td>
                  <td> {i._id} </td>
                  <td> {i.fullName} </td>
                  <td> {i.email} </td>
                  <td> {i.phone} </td>
                  <td> {i.gender} </td>
                  <td> {i.role} </td>
                  <td> {i.isBlocked ? "Yes" : "No"} </td>
                  <td>
                    <Button
                      variant="outline-info"
                      onClick={() => navigate(`/viewBooking/${i._id}`)}
                    >
                      Veiw
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-info"
                      onClick={() => navigate(`/coupan/${i._id}`)}
                    >
                      Veiw
                    </Button>
                  </td>

                  <td style={{ display: "flex" }}>
                    <Button
                      variant="outline-dark"
                      style={{ marginRight: "5px" }}
                      onClick={() => navigate(`/veiwUser/${i._id}`)}
                    >
                      Veiw
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => navigate(`/delUser/${i._id}`)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(UserData);
