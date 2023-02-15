import React,{useState} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'

const MainCategories = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightblue;
    border-radius: 4px;
    padding: 20px;
    flex-direction: column;

    button{
        padding: 6px 15px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;

    }
`
const Inputs = styled.div`
    width: 50%;

`
const CheckBoxs = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`
const Header = styled.div`
display: flex;
width: 100%;
height: 70px;
align-items: center;
border: 1px solid lightblue;
margin-bottom: 20px ;
border-radius: 4px;
cursor: pointer;

span{
    padding: 0 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
    cursor: pointer;
}
`
const EditGoods = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const id = location.state.id;
    const nms = location.state.name;
    const des = location.state.description;
    // const id = location.state
    console.log('my idd::->',location.state)

    const [userID, setuserID] = useState(id)
    const [name,setName] = useState (nms);
    const [description,setdescription] =useState(des)
    const token = (localStorage.getItem('token'))

    const config = {
        headers : {"Authorization" : `Bearer ${token}`}
    }
   
    //update api
    const handleUpdate = async () => {

        let temp = {
            description:description,
            name:name,
            // id:userID,        
        };

        await axios.put(`https://we-fast-flyweis.herokuapp.com/goods-type/${userID}`,temp,config).then(res=>{
        console.log('respnse',res)
        }).catch(e=>{
                    console.log("error",e)
                })             
        console.log(description,name)
    }

  return (
    <>
    <ContainerS>
        <Header>
            <span>Edit Goods
            <span  onClick={() => navigate("/dashbord")} >/
                 Home
            </span>
            </span> 
        </Header> 
        <MainCategories>
            
            <Inputs>
            <TextField  label="Name"
                    id="outlined-size-small"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense' />
            </Inputs>
            <Inputs>
            <TextField  label="Description"
                    id="outlined-size-small"
                    value={description}
                    onChange={(e)  => {
                        setdescription(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
           

            <button onClick={ handleUpdate }>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(EditGoods)