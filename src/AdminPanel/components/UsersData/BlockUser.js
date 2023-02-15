import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import HOC from "../../Common/HOC";

const BlockUser = () => {
  const { id } = useParams();

  const token = JSON.stringify(localStorage.getItem("token"));

  useEffect(() => {
    const BlockUser = async () => {
      const { data } = await axios.put(
        `https://fast-auto-praveen.herokuapp.com/api/admin/users/${id}/block`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    };
    BlockUser();
  });

  return <></>;
};

export default HOC(BlockUser);
