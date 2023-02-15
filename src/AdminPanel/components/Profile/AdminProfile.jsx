import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'

const AdminProfileUpdate = () => {
  return (
    <>
    <Containers>
        <UpdateSide>
            
        <span>Update Your Profile</span>
        <Inputs>
        <lebel>Your Name</lebel>
        <input type="text" />
        <lebel>Email</lebel>
        <input type="email" />
        <lebel>Password</lebel>
        {/* TODO:  */}
        <input type="password" onChange={''} />
        <lebel>Avatar</lebel>
        <input type="file" accept='image/*' />

        <button>Save</button>
        
        </Inputs>
        </UpdateSide>
        <ProfileSide>
            
        <span>Profile</span>

        <Images>
            <img src="https://coursebari.com/wp-content/uploads/2021/06/899048ab0cc455154006fdb9676964b3.jpg" alt="" />

        </Images>
        <Inputss>
        <lebel>Name :</lebel>
        <span>UserName</span> 
        </Inputss>
        <Inputss>
        <lebel>Email :</lebel>
        <span>UserName@gmail.com</span> 
        </Inputss>
        </ProfileSide>
      
    </Containers>
    </>
  )
}

export default HOC(AdminProfileUpdate)

const Containers = styled.div`
    width: 100%;
    margin: 70px 10px;
    overflow-y: auto;
    height: 650px;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
`
const Inputs = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 20px;
    -webkit-box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    flex-direction: column;
    input{
        padding: 2px 6px ;
        outline: none;
        border: 1px solid lightblue;
        margin-top: 10px;
    }
    button{
        margin: 10px 0;
        width: 118px;
        padding: 6px 0;
        border: none;
        background-color: #188cc2;
        color: #fff;
        cursor: pointer;
        border-radius: 2px;
    }
`

const UpdateSide = styled.div`
    width: 50%;
    padding: 20px;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const ProfileSide = styled.div`
    width: 50%;
    padding: 20px;
    -webkit-box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75);

    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

const Inputss = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`

const Images = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid lightblue;
    border-radius: 999px;
    padding: 5px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 999px;
    }
`