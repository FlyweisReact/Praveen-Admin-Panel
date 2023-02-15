import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const DeleteUser = async () => {
      const data = await axios.delete(
        `https://fast-auto-praveen.herokuapp.com/api/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return alert("User Deleted Successfully");
    };
    DeleteUser();
    navigate('/user')
  });
  return <></>;
};

export default DeleteUser;
