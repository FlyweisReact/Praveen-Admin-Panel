import React, { useCallback, useState } from "react";
import HOC from '../Common/HOC'
import { ContainerS } from "../../Common/CommonStyling";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';



const Driver = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);
    const [ id , setID] = useState('')
    const [modalShow, setModalShow] = React.useState(false);
  
    // fetchUser ---
    const fetchData = useCallback(async () => {
      try {
        const { data } = await axios.get(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/allDrive",
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
      window.scrollTo(0,0)
      fetchData();
    }, [fetchData]);
  

    
  const blockHandler = async (e) => {
    try {
      const {data} = await axios.put(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/drivers/62d6680a554b79094964cfe8/block`,{} ,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        }
      );
      alert(data.message);
      fetchData();
      setModalShow(false)
    } catch (err) {
      console.log(err);
    }
  };




  
    return (
      <>
        <ContainerS>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <h2>All Drivers</h2>
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
                  <th>Distance</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Adhaar Number</th>
                  <th>Voter ID</th>
                  <th>Driver License</th>
                  <th>Address</th>
                  <th>Vehicle Number</th>
                  <th>Blocked</th>
                  <th>Booking</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.driver?.map((i) => (
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
                    <td> {i.name} </td>
                    <td> {i.distance} </td>
                    <td> {i.phone} </td>
                    <td> {i.email} </td>
                    <td> {i.gender} </td>
                    <td> {i.role} </td>
                    <td> {i.aadharNumber} </td>
                    <td> {i.voterId} </td>
                    <td> {i.driverLicenseNumber} </td>
                    <td> {i.address} </td>
                    <td> {i.vehicleNumber} </td>
                    <td> {i.isBlocked === true ? "Yes" : "No"} </td>  
                    <td>
                      <Button
                        variant="outline-info"
                      >
                        View
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="outline-danger"
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

export default HOC(Driver)