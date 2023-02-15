import React,{useState,useEffect} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Label } from '@material-ui/icons'
import { useNavigate } from 'react-router'
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
const AddVehicle = () => {
    const navigate = useNavigate();

    //api integration

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjlmMzExZTZlY2I3NTllZWI4ODY2NiIsInNjb3BlIjoibG9naW4iLCJpYXQiOjE2NDcyNDY3MDksImV4cCI6MTY0OTgzODcwOX0.7T0tBbRjPdyFc0Mmo53l_D-enLW7IrKu_TafNIPj6SU'
    // const token = (localStorage.getItem('token'))

    let url = "https://we-fast-flyweis.herokuapp.com/vehicle"

    const [name, setName] = useState('')
    const [vehicleType, setVichleType] = useState('')
    const [vehicleNumber, setvehicleNumber] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')

        let temp = {
            vehicleNumber : vehicleNumber,
            name : name,
            vehicleType : vehicleType,
            phone_number : phoneNumber,
        }

    const HandleAddVehicle = (e) =>{
        const config = {
            headers : {"Authorization" : `Bearer ${token}`}
        }
        axios.post(url,temp,config).then(res=>{
            console.log("my data",res)
        }).catch(err=>{
            console.log("error",err)
        })
    }


   
    

  return (
    <>
    <ContainerS>
        <Header>
                    <span>Add Vehicle
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
            <TextField  label="vehicleNumber"
                    id="outlined-size-small"
                    value={vehicleNumber}
                    onChange={(e)  => {
                        setvehicleNumber(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
            <Inputs>
            <TextField  label="vehicleType"
                    id="outlined-size-small"
                   value={vehicleType}
                   onChange={(e)=>{
                       setVichleType(e.target.value)
                   }}
                    size="small"
                    margin='dense' />
            </Inputs>
            <Inputs>
                                
            <TextField
                    label="Phone no"
                    id="outlined-size-small"
                   value={phoneNumber}
                   onChange={(e) =>{
                       setphoneNumber(e.target.value)
                   }}
                    size="small"
                    margin='dense'
                    type='Number'
                    />
            </Inputs>

            <button onClick={HandleAddVehicle}>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(AddVehicle)