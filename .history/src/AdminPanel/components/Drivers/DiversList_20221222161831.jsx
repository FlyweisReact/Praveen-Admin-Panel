/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";


let style = {
  width: "55px",
  height: "55px",
  border: "1px solid lightgray",
  borderRadius: "999px",
};

const VendorList = () => {
  const [driverdata, setDriverdata] = useState([]);

  //  All Drivers
  const ViewAllDriver = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3003/api/admin/allDrive"
      );
      setDriverdata(data);
    } catch (e) {
      console.log("All Driver err =>", e);
    }
  };

  useEffect(() => {
    ViewAllDriver();
  }, []);


  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {driverdata?.driver?.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={
                    item.image
                      ? item.image
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pg7njRUvR2n1O3mGUrm8EgSU56yP5LsSxg&usqp=CAU"
                  }
                  alt=""
                  style={style}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.phone} </td>
              <td>{item.email} </td>
              <td>{item.gender} </td>
             
            </tr>
          ))}
        </tbody>
      </table>

   </>
  );
};

export default VendorList;
