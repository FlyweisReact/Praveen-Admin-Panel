import axios from "axios";
import React, { useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import { useReducer } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: false, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "", Privacy: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const GetPrivacy = () => {

    const navigate = useNavigate()

  const token = localStorage.getItem("token");

  const [{ loading, error, Privacy }, dispatch] = useReducer(reducer, {
    Privacy: [],
    loading: false,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://fast-auto-praveen.herokuapp.com/api/admin/privacy-policy`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <>
      <ContainerS>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <h2>Privacy Policy</h2>
          <Button variant="outline-dark" onClick={() => navigate('/addPrivacy')}>Update Privacy Policy</Button>
        </div>

        <div style={{ marginTop: "5%", marginLeft: "5%" }}>
          <h5>ID</h5>
          <p
            style={{ border: "2px solid black", padding: "5px ", width: "40%" }}
          >
            {Privacy._id}
          </p>
          <h5>Privacy Policy</h5>
          <p
            style={{ border: "2px solid black", padding: "5px ", width: "40%" }}
          >
            {Privacy.privacyPolicy}
          </p>
        </div>
      </ContainerS>
    </>
  );
};

export default HOC(GetPrivacy);
