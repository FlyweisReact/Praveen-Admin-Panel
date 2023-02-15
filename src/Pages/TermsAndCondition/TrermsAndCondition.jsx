import React from 'react'
import HOC from '../../Common/HOC'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 65px;
    padding: 20px;

    button{
        border: none;
        cursor: pointer;
        color: #fff;
        background-color: #000;
        padding: 5px 10px;
        border-radius: 4px;
        margin-left: 30px;
    }
    

`
const MyTrems = styled.div`
    margin: 20px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 7px;
    -webkit-box-shadow: 4px 5px 7px 0px rgba(135,130,135,1);
-moz-box-shadow: 4px 5px 7px 0px rgba(135,130,135,1);
box-shadow: 4px 5px 7px 0px rgba(135,130,135,1);
`
const UpdateTerms = styled.div`
    margin: 20px;
    padding: 10px;

    textarea{
        width: 100%;
        min-height: 200px;
        font-size: 1rem;
        padding: 10px;
    }

 
`

const TrermsAndCondition = () => {
  return (
    <>
        <Container>
            <MyTrems>
                    <h5>Terms and Conditions Generator</h5>
                    <p>
                    Every website needs a Terms and Conditions. Even if your website is not for your business or any commercial structure, you will be better off with a Terms and Conditions agreemnent. All websites are advised to have their own agreements for their own protection.

                    We will help you by providing this FREE terms and conditions generator. Fill in the blank fields below, and we will email you your personalized terms and conditions just for you and your business. The accuracy of the generated document on this website is not legally binding. Use at your own risk.

                    </p>

            </MyTrems>

            <UpdateTerms>
                <textarea placeholder='terms and Conditions' ></textarea>

            </UpdateTerms>

            <button>Submit</button>

        </Container>
    </>
  )
}

export default HOC(TrermsAndCondition)