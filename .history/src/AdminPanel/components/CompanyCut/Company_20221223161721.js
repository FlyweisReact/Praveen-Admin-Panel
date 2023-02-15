import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import { useNavigate } from "react-router";

const Company = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const [data , setData] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/companyCut`,
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
  };


  
  useEffect(() => {
    
    fetchData();
  }, [axios]);

  return (
    <>
      <ContainerS>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Company Cut</h2>
          <Button
            variant="outline-success"
            onClick={() => navigate("/addCompany")}
          >
            Update Company Cut
          </Button>
        </div>
        <div style={{ marginTop: "5%" }}>
          <p
            style={{ border: "2px solid black", width: "40%", padding: "5px" }}
          >
            ID : {cut?.companyCut?._id}{" "}
          </p>
          <p
            style={{ border: "2px solid black", width: "40%", padding: "5px" }}
          >
            ID : {cut?.companyCut?.companyCut}{" "}
          </p>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(Company);
