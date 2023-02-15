/** @format */

import React, { useCallback, useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Company = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/companyCut`,
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
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ContainerS>
        <div>
          <p style={{ fontSize: "1.3rem" }}>Company Cut</p>
        </div>

        <Table striped bordered hover>
        <thead>
          <th
        </thead>

        </Table>
        <div style={{ marginTop: "2%" }}>
          <p
            style={{ border: "2px solid black", width: "40%", padding: "5px" }}
          >
            Company Cut : {data?.companyCut?.companyCut}{" "}
          </p>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(Company);
