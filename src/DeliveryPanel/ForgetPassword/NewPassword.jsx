import React, { useState, useEffect } from "react";
import sikhlo from "../../../src/Components/images/shopping.jpg"

//css file
// import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl, InputLabel } from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useNavigate } from 'react-router-dom';

const EnterPassword = (props) => {
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };  
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
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
                        <span><h6>Welcome!</h6></span>                  
                    </div>
                    <div className="main_padding_top_bottom">
                        <div className="mt-2">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                  <FormControl className="MuiFormControl-fullWidth" variant="outlined" >
                        <OutlinedInput
                           id="outlined-adornment-password"
                            placeholder="Confirm Password *"
                           type={showPassword ? "text" : "password"}
                            autoComplete="off"
                           endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                             autoComplete="off"
                                aria-label="toggle password visibility"
                                 onClick={() => setshowPassword(!showPassword)}
                                onMouseDown={(event) => event.preventDefault()}
                                 >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                 </IconButton>
                                </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className="inputfiledformatting mt-2">
                            <Button
                                variant="contained"
                                className="Login_page_button"
                                onClick={() => navigate("/")}
                            >
                                Log in
                            </Button>
                        </div>           
                    </div>
                </Card>
            </div>

        </>
    );
};

export default EnterPassword;
