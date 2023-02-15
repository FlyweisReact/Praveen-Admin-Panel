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

  const fetchData = useCallback(async () => {
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
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [fetchData]);

  //  Delete Handler
  const deleteHandler = async (id) => {
    try {
      const data = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      alert("User Deleted SuccessFully");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };



  const blockHandler = async (id) => {
    try{
        const data = await axios.put()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <ContainerS>
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <h2>All Users</h2>
        </div>

        <div
          style={{
            overflowX: "auto",
            marginTop: "2%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Contact NO.</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Role</th>
                <th>Blocked</th>
                <th>Bookings</th>
                <th>Coupons</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.requiredUsers?.map((i) => (
                <tr key={i._id}>
                  <td>
                    <img
                      src={
                        i.image
                          ? i.image
                          : "https://cdn-icons-png.flaticon.com/512/25/25634.png"
                      }
                      style={{
                        width: "80px",
                        border: "1px solid black",
                        borderRadius: "100%",
                        padding: "5px",
                      }}
                      alt=""
                    />
                  </td>
                  <td> {i.fullName} </td>
                  <td> {i.email} </td>
                  <td> {i.phone} </td>
                  <td> {i.gender} </td>
                  <td> {i.birthDate} </td>
                  <td> {i.role} </td>
                  <td> {i.isBlocked ? "Yes" : <Button>Block</Button>} </td>
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

                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteHandler(i._id)}
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
