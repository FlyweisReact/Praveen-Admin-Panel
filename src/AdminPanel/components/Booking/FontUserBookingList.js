
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'

let style = {
  width : '55px',
  height : '55px',
  border : '1px solid lightgray',
  borderRadius: '999px',
  
}

        const FontBookingList = () => {

          const Auth = {
            headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
          }
          //api-call------>
          const [data, setdata] = useState([])
          const AlluserData = async () => {
            const res = await axios.get('https://we-fast-flyweis.herokuapp.com/user/all',Auth)
            setdata(res.data.data.drivers)
            console.log("my user data",res.data.data.drivers)
          }

          useEffect(()=>{
            AlluserData()
          },[])

          const navigate = useNavigate()

  return (

    <>
      <table class="table">

        {/* <-------header- */}
      <thead class="thead-dark">
        <tr>
          {/* <th scope="col">#</th> */}
      
          <th scope="col">Name</th>
          <th scope="col">Mobile No</th>
   
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
      <tbody>
        {data.map((item)=>(

        <tr key={item.id}>
          {/* <th scope="row">{item.id} </th> */}
          {/* <td>{item.name}</td> */}
          <td>{item.name}</td>
          <td>{item.phoneNumber}</td>
        
          <td>
            <button onClick={()=>navigate('/view-userbooking',{state:item})} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button>     
          </td>
        </tr>
        ))}

      </tbody>
    </table>   
    </>
  )
}

export default FontBookingList