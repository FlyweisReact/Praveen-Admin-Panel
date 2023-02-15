import React, { useState, useEffect } from "react";
import sikhlo from "../../../Components/images/shopping.jpg"
import {useNavigate} from "react-router-dom"

//css file
// import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, } from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";



const ForgotPassword = (props) => {
    const navigate = useNavigate();

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="Login_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <div >
                        <img style={{ height: "120px", width: "120px" }} src={sikhlo} alt="" className="login_image" />
                    </div>
                    <div>
                        <span><h6>Enter Registered Email</h6></span>
                      
                    </div>
                    <div className="main_padding_top_bottom">
                        <div className="pb-2">
                            
                         
                        </div>
                        <div className="pb-3">
                            
                            <TextField
                            
                                label="Email"
                                autoComplete="off"
                            />
                
                        </div>
            
                   
                        <div className="inputfiledformatting mt-2">
                            <Button
                                variant="contained"
                                className="Login_page_button"
                                onClick={() => navigate("/otp")}
                            >
                               Submit
                            </Button>
                        </div>
                   
                        
                    </div>


                </Card>
            </div>

        </>
    );
};

export default ForgotPassword;