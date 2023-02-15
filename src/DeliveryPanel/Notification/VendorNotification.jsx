import React from 'react'
import HOC from '../Common/HOC'
import {ContainerS} from '../Common/CommonStyling'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'


const SmallContainers = styled.div`
    width: 100%;
    min-height: 150px;
    margin: 10px;
    border: 1px solid lightblue;
    padding: 5px 20px;

    img{
        width: 100px;
        height: 100px;
        
    }
`

const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    button{
        margin: 10px;
    }
`

const VendorNotification = () => {

    const styles = {
        Active: {
            backgroundColor: 'lightgray',
            cursor: 'not-allowed',
            button:'disabled',
        },
        Inactive: {
            backgroundColor: '#17a2b8'
        },
    }
    const Reject = {
        Actives: {
            backgroundColor: 'lightgray',
            cursor: 'not-allowed',
            button:'disabled',
        },
        Inactives: {
            backgroundColor: 'red'
        },
    }

    const [click, setclick] = React.useState(false);
    const [reject, setReject] = React.useState(false)

  return (
    <>
     <ContainerS>
        <MainContainer>
            <Headers>
                <span>Notifications</span>
            </Headers>
            <TitleWrapper>
                <Wrapper>
                    <SmallContainers>  
                        <img src="
                        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYMbq6-qUIPBIdcFthRncQCkX1aH8JvY-QA&usqp=CAU
                        " alt="" />  
                        <h5>Product Name : <span> Product 1 </span></h5> 
                        <p>Product Id :<span>#4567899</span></p>                  
                        <p>Customer Id :<span>#47899</span></p>                  
                        <p>payment mode :<span>COD</span></p>                  
                        <ButtonDiv>
                            <button style={click ?  styles.Active : styles.Inactive }  onClick={()=>setclick(!click)}>Accept</button>
                            <button  style={reject ?  Reject.Actives : Reject.Inactives }  onClick={()=>setReject(!click)}>Reject</button>
                        </ButtonDiv>
                    </SmallContainers>
                </Wrapper>
            </TitleWrapper>
        </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(VendorNotification)


const MainContainer = styled.div`
    width: 100%;
`
const Headers = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 30px;
    border: 1px solid #6a7887;
    display: flex;
    align-items: center;
    -webkit-box-shadow: -5px -2px 5px 1px rgba(111,145,179,1);
    -moz-box-shadow: -5px -2px 5px 1px rgba(111,145,179,1);
    box-shadow: -5px -2px 5px 1px rgba(111,145,179,1);
    span{
        font-size: 1.2rem;
        color: #134a89;
        font-weight: 600;
        margin-left: 30px;

    }
`
const TitleWrapper = styled.div`
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    border: 1px solid lightgray;
    width: 80%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 30px;
    -webkit-box-shadow: 2px 4px 6px 1px rgba(78,86,94,1);
    -moz-box-shadow: 2px 4px 6px 1px rgba(78,86,94,1);
    box-shadow: 2px 4px 6px 1px rgba(78,86,94,1);
    position: relative;

input{
        width: 100%;
        border: 1px solid lightblue;
        border-radius: 3px;
        padding: 3px 10px;
        outline: none;
        margin: 10px 0;
        
    }

    button{

        border: none;
        margin: 20px 0;
        background-color:#17a2b8;
        color: #fff;
        cursor: pointer;
        border-radius: 2px;

            :nth-child(2){
                background-color: red;
                margin: 0 10px;
                }
        }

    lebel{
         margin-top: 20px;
        color: #021133;
        }
    textarea{

        resize: none;
        outline: none;              
        }

`