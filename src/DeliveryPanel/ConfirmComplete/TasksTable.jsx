
import { Table } from '@material-ui/core'
import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import styled from 'styled-components'
import { NoEncryption } from '@material-ui/icons'
import { margin } from '@mui/system'

const MainContainer = styled.div`
    width: 100%;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 4px;

`


const TaskTable = () => {
    const [click,setClick] = React.useState('Pending')

    const Data = [
        
        {
        id: '1',
        productID : '#345678',
        productName: 'AirPods',
        productImg: 'https://dam.which.co.uk/f939fc01-1d6f-4450-8c2c-6cddb664676a.jpg',

        },]

return (
    <>
    <MainContainer>

        <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>Product ID</th>
      <th>Product Name</th>
      <th>Image</th>
      <th style={{minWidth: '170px'}}>Status</th>
      <th style={{marginLeft : '30px'}}>Acton</th>
    </tr>
  </thead>
  <tbody>

     

    {Data.map((item)=>(
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>#{item.productID}</td>
      <td>{item.productName}</td>
      <td>
          <img src={item.productImg} alt="" style={{width : '60px', height: '60px', border: '1px solid lightgray', padding: '5px',borderRadius : '999px'}} />
      </td>
      <td>
          <span style={{  color: 'blueviolet'}}>{click}</span>
      </td>
      <td>
          <button onClick={()=>setClick('Completed')} value='accept' style={{ border: 'none',  color: '#000', padding:'2px 10px',backgroundColor:'lightgreen'}}>Completed</button>
        
      </td>
    </tr>
         ))}
   
  
  </tbody>
</Table>
</MainContainer>

    </>
  )
}

export default TaskTable