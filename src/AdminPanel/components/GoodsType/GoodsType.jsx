import React, { useEffect, useState } from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
    width: 100%;

`

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    border: 1px solid lightblue;
    margin-bottom: 20px ;
    border-radius: 4px;
    justify-content: space-between;
    padding: 0 20px;

    span{
        
        font-size: 1.1rem;
        font-weight: 600;
        color: #17a2b8;
        display: flex;
        align-items: center;
    }
    button{
        border: none;
        padding: 6px 12px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;
    }
`
const GoodsList = styled.div`
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;

  h5{
    font-size: 0.845rem;
    span{
      color: #451bb1;
    }
  }

  button{
    margin:5px 10px;
    width: 118px;
    padding: 7px 0;
    border: none;
    border-radius: 5px;

    color: #fff;
    background-color: #17a2b8;

 

    
  }

`

const GoodsType = () => {

  const [data, setdata] = useState([])

  const token = (localStorage.getItem('token'))
  const Auth = {
    headers: {"Authorization" : `Bearer ${token}` } 
  }


  //api integrations
  // get data=====>
  const url = 'https://we-fast-flyweis.herokuapp.com/goods-type'
  const GoodsType = async ()=>{

    try{

      const data = await axios.get(url)
      console.log('mydata:::--->',data.data.data.goodsTypes)
      setdata(data.data.data.goodsTypes)

    }catch(e){
      console.log('LOL error---->',e)
    }

  }

  //delete method =============>

  const deleteItem = async (id) =>{
    try{
      const res = await axios.delete("https://we-fast-flyweis.herokuapp.com/goods-type/"+id,Auth)
      console.warn("pp",res)
      GoodsType()

      }catch(e){

      }  
     
  }
  

  useEffect(()=>{
      window.scrollTo(0 ,0)
      GoodsType()
  },[])

  //send data to edit
  // const handleEdit = (item)=>{
  //   console.log('mydata::::::::',(item))
  

  // }



  const navigate = useNavigate();
  return (
    <>
        <ContainerS>
            <MainContainer>
            <Header>
            <span>Goods Type
                     <span  onClick={() => navigate("/dashbord")} >/
                        Home
                    </span>
            </span> 
            <button onClick={() => navigate("/add-goods")}>  Add Goods</button>
            </Header>
            {data.map(item=>(
                <GoodsList key={item._id}>
                <h5><span>Name :</span><p>{item.name}</p></h5>
                <h5><span>Description :</span><p>{item.description} </p></h5>
                
                    <button onClick={()=>navigate('/edit-goods',{state:item})} >Edit</button>
                             
                  <button style={{backgroundColor: 'red'}} onClick={()=>deleteItem(item.id)}>Delete</button>     
              </GoodsList>

            ))}
          
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(GoodsType)