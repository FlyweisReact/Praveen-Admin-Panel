/** @format */

import axios from "axios";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import editSvg from "../../Image/edit.svg";

const GetVehicle = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/vehicleType",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ContainerS>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Vehicle Lists</h2>
          <Button
            variant="outline-success"
            onClick={() => navigate("/addVehicle")}
          >
            Add Vehicle
          </Button>
        </div>

        <div
          style={{
            scrollBehavior: "smooth",
            overflow: "auto",
            marginBottom: "10%",
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
                <th>Name</th>
                <th>Price/km</th>
                <th>Currency</th>
                <th>wheels</th>
                <th>Day Charge</th>
                <th>Night Charge</th>
                <th>Waiting Charge</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.allVehicleTypes?.map((i) => (
                <tr key={i._id}>
                  <td>{i.name}</td>
                  <td>{i.pricePerKm}</td>
                  <td>{i.currency}</td>
                  <td>{i.wheels}</td>
                  <td>{i.day}</td>
                  <td>{i.night}</td>
                  <td>{i.waiting}</td>
                  <td>
                    <img
                      src={editSvg}
                      alt=""
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "100%",
                        width: "30px",
                        padding : '5px' ,
                        height: "30px",
                      }}
                      onClick={() => navigate(`/updateVehicle/${i._id}`)}
                    />
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

export default HOC(GetVehicle);
