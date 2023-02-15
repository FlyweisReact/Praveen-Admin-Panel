/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import editSvg from "../../Image/edit.svg";
import { Table, Form, Button, Modal } from "react-bootstrap";
const Term = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [{ loading, error, Term }, dispatch] = useReducer(reducer, {
    Term: [],
    loading: false,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://fast-auto-praveen.herokuapp.com/api/admin/terms",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch, axios, token]);

  return (
    <ContainerS>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <h2>Term&Condition</h2>
        <Button variant="outline-dark" onClick={() => navigate("/updateTerm")}>
          Update Terms&Condition
        </Button>
      </div>

      <div style={{ marginTop: "5%", marginLeft: "5%" }}>
        <h5>ID</h5>
        <p style={{ border: "2px solid black", padding: "5px ", width: "40%" }}>
          {Term?.termsAndCondition?._id}
        </p>
        <h5>Term&Condition</h5>
        <p style={{ border: "2px solid black", padding: "5px ", width: "40%" }}>
          {Term?.termsAndCondition?.terms}
        </p>
      </div>
    </ContainerS>
  );
};

export default HOC(Term);
