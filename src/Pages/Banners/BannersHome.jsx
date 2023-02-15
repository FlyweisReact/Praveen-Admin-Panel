import React, { useState } from 'react'
import styled from 'styled-components'
import HOC from '../../Common/HOC'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@material-ui/core';


const BannersHome = () => {

  
const [Data,setData] = useState([
    {image : 'https://graphicsfamily.com/wp-content/uploads/2020/08/Online-Shopping-AD-Banner-Design-in-Photoshop-scaled.jpg',

},
    {image : 'https://www.dienodigital.com/wp-content/uploads/2020/06/Do-It-Yourself-Tutorials-Photoshop-Tutorial-Web-Banner.jpg',
  }
  ,
    {image : 'https://www.dienodigital.com/wp-content/uploads/2020/06/Do-It-Yourself-Tutorials-Photoshop-Tutorial-Web-Banner.jpg',
  }
  ,
    {image : 'https://www.dienodigital.com/wp-content/uploads/2020/06/Do-It-Yourself-Tutorials-Photoshop-Tutorial-Web-Banner.jpg',
  }
  ,
    {image : 'https://www.dienodigital.com/wp-content/uploads/2020/06/Do-It-Yourself-Tutorials-Photoshop-Tutorial-Web-Banner.jpg',
  }

])

    const deleteitem = (index)=> {     
     Data.splice(index,1);
      setData([{...Data}])


    }

  return (
    <>
    <Containers>
        <Headers>
            <input type="file" accept='image/*'/>
            <button>Save</button>
        </Headers>
        <BannersWrapper> 
            {Data.map((elm,index)=>(
                <ImageWrapper key={index}>
                    <img src={elm.image} alt="" />
                    <Tooltip title='Delete'> 
                    <DeleteOutlineIcon className='deleteIcon' onClick={() => deleteitem(elm,index)}  />
                    </Tooltip>
                </ImageWrapper> 
             ))} 
        </BannersWrapper>
    </Containers>
    </>
  )
}

export default HOC(BannersHome)

const Containers = styled.div`
    margin: 70px 10px;
    padding: 10px;

    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
`
const BannersWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Headers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        width: 50%;
        margin: 10px 0;
        border: 1px solid lightgray;
    }
    textarea{
        width: 50%;
        resize: none;
        min-height: 200px;
        padding: 20px;
        margin: 10px 0;
        border: 1px solid lightgray;
        outline-color: lightblue;
        border-radius: 3px;
    }

    button{
        width: 118px;
        padding: 5px 0;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        background-color: #000;
        color: #fff;
    }

`
const ImageWrapper = styled.div`
    width: 80%;
    height: 200px;
    padding: 5px;
    border: 1px solid lightgray;
    margin: 20px;
    border-radius: 2px;

    -webkit-box-shadow: inset 2px 3px 10px -1px rgba(0,0,0,0.71);
-moz-box-shadow: inset 2px 3px 10px -1px rgba(0,0,0,0.71);
box-shadow: inset 2px 3px 10px -1px rgba(0,0,0,0.71);
position: relative;

.deleteIcon{
    position: absolute;
    right: 10px;
    bottom: 20px;
    cursor: pointer;
    font-size: 35px;
    color: red;
}
 


    img{
        width: 100%;
        height: 100%;
        object-fit: contain;

    }
`