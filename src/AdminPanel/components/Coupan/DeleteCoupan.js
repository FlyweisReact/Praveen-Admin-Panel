import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";

const DeleteCoupan = () => {
    const navigate= useNavigate()
  const { userId, id } = useParams();

  useEffect(() => {
    const DeleteCoupan = async () => {
      try {
        const { data } = await axios.delete(
          `https://fast-auto-praveen.herokuapp.com/api/admin/coupons/users/${userId}/delete/${id}` , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        navigate(`/coupan/${userId}`)
      } catch (err) {
        console.log(err);
      }
    };
    alert(`Coupan ${id} has been Deleted`)
    DeleteCoupan()

  });

  return <></>;
};

export default HOC(DeleteCoupan);
