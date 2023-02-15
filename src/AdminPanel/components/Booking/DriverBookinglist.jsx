
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios';
import HOC from '../../Common/HOC';
import { ContainerS } from '../../Common/CommonStyling';


let style = {
  width : '55px',
  height : '55px',
  border : '1px solid lightgray',
  borderRadius: '999px',
  
}

const DriverBooking = () => {

         // Api integrations------------>

        const token = (localStorage.getItem('token'));
        const [driverdata, setDriverdata] = useState([])
        let url = "https://we-fast-flyweis.herokuapp.com/driver/all"

        const ViewAllDriver = async()=>{

          let config = {
            headers : {"Authorization" : `Bearer ${token}` }
          }

          try{
              const data = await axios.get(url,config)
              setDriverdata(data.data.data.drivers)
              console.log('all-data:::',data.data.data.drivers)
          }catch(e){
            console.log("error::::",e)
          }
        }

          useEffect(()=>{
          ViewAllDriver()
        },[])



      const navigate = useNavigate()

  return (
    <>
     <ContainerS>
     <table class="table">
            {/* <------------header----------------> */}
      <thead class="thead-dark">
        <tr>
          <th scope="col">Images</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile No</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
        <tbody>
                {driverdata.map((item)=>(
                <tr key={item.id}>
                <td>
                    <img src={item.profileImage} alt="" style={style} />
                </td>
                <td>{item.name}</td>
                <td>{item.phoneNumber} </td>
                <td>
                    <button onClick={()=>navigate('/view-driverbooking',{state:item})} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button>
                </td>
                </tr>
                ))}  
        </tbody>
        </table>
    </ContainerS>
    </>
  )
}
export default HOC(DriverBooking)