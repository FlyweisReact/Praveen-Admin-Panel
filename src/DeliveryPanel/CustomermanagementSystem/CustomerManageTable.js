import React from 'react'
import { useNavigate } from 'react-router'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CustomerManageTable = () => {

  const navigate = useNavigate();

    const data = [
    {
        userName:'user1',
        userID : '45679',
        email: 'user1@gmail.com',
        img : 'data:image/png;base64,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'
    },
    {
        userName:'user2',
        userID : '1234566',
        email: 'user2@gmail.com'
    },
    {
        userName:'user3',
        userID : '789075',
        email: 'user3@gmail.com'
    },
    {
        userName:'user4',
        userID : '678990',
        email: 'user4@gmail.com'
    },
    {
        userName:'user5',
        userID : '4576788',
        email: 'user5@gmail.com',
    },
    ]

  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Avater</th>

      <th scope="col">UserName</th>
      <th scope="col">userID</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>{
        const {userID, userName, email, img, avtar} = item
        
        
       return(
                   <tr key={userID}>                           
                        <th scope="row">1</th>
                            <td>                        
                            <img src={img} alt='No Image'  style={{width:'50px', height:'50px', objectFit:'contain'}}/>
                            </td>
                            <td>@{userName}</td>
                            <td># {userID}</td>
                            <td>{email}</td>
                                             
                              <td>
                                {/* <button 
                                  style={{border:'none', borderRadius:'3px', backgroundColor:'#17a2b8',color:'#fff'}}
                          
                                  >View</button> */}
                                <button onClick={() => navigate("/customer-edit",{state:item})} style={{border:'none',margin:'0 10px', borderRadius:'3px', backgroundColor:'#abb9f6',color:'#fff'}}>Edit</button>
                                <button  style={{border:'none', borderRadius:'3px', backgroundColor:'red',color:'#fff'}}>Delete</button>
                          </td>
                    </tr>
                )
              })}      

        </tbody>
      </table>
    </div>
  )
}

export default CustomerManageTable