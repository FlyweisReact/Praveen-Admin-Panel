import React from "react";
import { useNavigate, useParams } from "react-router";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { Alert, Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";

const Coupan = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem("token");


  const fethccData = async () => {
    const { data } = await axios.get(
      `https://fast-auto-praveen.herokuapp.com/api/admin/coupons/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  };


  useEffect(() => {
   
    fethccData();
  }, [axios]);

  return (
    <>
      {coupan?.coupons ? (
        <ContainerS>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>User Coupans</h1>
            <Button
              variant="outline-success"
              onClick={() => navigate(`/addCoupan/${id}`)}
            >
              Add More Coupan
            </Button>
          </div>

          <div>
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
                  <th>ID</th>
                  <th>Code</th>
                  <th>validFrom</th>
                  <th>validTill</th>
                  <th>customer</th>
                  <th>discount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {coupan?.coupons?.map((i) => (
                  <tr key={i._id}>
                    <td> {i._id} </td>
                    <td> {i.code} </td>
                    <td> {i.validFrom} </td>
                    <td> {i.validTill} </td>
                    <td> {i.customer} </td>
                    <td> {i.discount} </td>
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={() => navigate(`/deleteCoupan/${id}/Coupan/${i._id}`)}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ContainerS>
      ) : (
        <ContainerS>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Alert variant="info" style={{ width: "70%" }}>
              No Coupan Founded
            </Alert>
            <Button
              variant="outline-success"
              onClick={() => navigate(`/addCoupan/${id}`)}
            >
              Add Coupan
            </Button>
          </div>
        </ContainerS>
      )}
    </>
  );
};

export default HOC(Coupan);
