/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";

const GetPrivacy = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/privacy-policy`,
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
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ContainerS>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Privacy Policy</h3>
        </div>

        <Table striped bordered hover style={{ marginTop: "2%" }}>
          <thead>
            <tr>
              <th>Privacy Policy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {data?.privacyPolicy} </td>
              <td> /td>
            </tr>
          </tbody>
        </Table>
      </ContainerS>
    </>
  );
};

export default HOC(GetPrivacy);
