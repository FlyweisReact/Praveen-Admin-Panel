


//========================== data sending page  =============================



import React from 'react'
import { useNavigate } from 'react-router-dom';
const Learn = () => {
const navigate = useNavigate();
const data = [{
    name : 'FastName'
    // data are here
}]


  return (
    <>

    {data.map((item, index)=>(
                <button type="button" className="btn btn-info" onClick={()=> navigate("/productsDetails",
                {
                    state: item,
                })}>View</button>
    ))
    }
    </>
  )
}

export default Learn;


//====================== data showing page  ==========================

import React from 'react'

const ShowData = () => {
    
    const location = useLocation();
    // console.log('location',location.state)
    const Name = location.state.name

  return (
    <>
     {Name}
    </>
  )
}

export default ShowData

