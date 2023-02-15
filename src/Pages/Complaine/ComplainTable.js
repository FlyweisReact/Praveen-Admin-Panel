import React from 'react'
import styled from 'styled-components'

const ComplainTable = () => {
  return (
    <>
     <ComplainHolder>

        <h5>Complain on : <span>Product 3</span></h5>
        <h5>Store ID : <span>#2345</span></h5>
        <h5>Complain by :<span>User678</span> </h5>

        <h5>Complain :

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad quas cupiditate perspiciatis vero inventore nihil debitis accusantium voluptas hic.</p>

        </h5>
            <button style={{backgroundColor : 'red', color :'#fff'}}>Suspend </button>
            <button style={{backgroundColor : '#f7a56d', color :'#fff'}}>Send Warning </button>

</ComplainHolder>


    </>
  )
}

export default ComplainTable

const ComplainHolder = styled.div` 
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 20px;
    margin: 10px 0;

    h5{
        color: blue;
        font-size: 1rem;

    span{
        color: red;
        margin: 0 30px;
    }
     
    }
    p{
         color: red;
        margin: 10px 0;          
    }

    button{
        margin: 10px;
        padding: 8px 10px;
        border: none;         
    }
      

`