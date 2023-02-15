import React, { useState, useEffect } from "react";
import sikhlo from "../../Image/shopping.jpg";
import "./Login.css";
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "bootstrap";

const Login = (props) => {
  const navigate = useNavigate();

  //---------------------local state ----------------------
  const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---------------loginApi------------------------

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const AdminLogin = async () => {
    try {
      let url = "https://fast-auto-praveen.herokuapp.com/api/admin/login";
      let temp = {
        email: email,
        password: password,
      };
      const { data } = await axios.post(url, temp);
      localStorage.setItem("token", data.token);
      navigate("/dashbord");
     
    } catch (error) {
      console.log("Please Enter Currect Details ::", error);
      alert('Invalid Credentials Details')
    }
  };

  return (
    <>
      <div className="Login_Main_div content_padding">
        <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
          <div>
            <img
              style={{ height: "120px", width: "120px" }}
              src={sikhlo}
              alt=""
              className="login_image"
            />
          </div>
          <div>
            <span>
              <h6>Welcome!</h6>
            </span>
          </div>
          <div className="main_padding_top_bottom">
            <div className="pb-2">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>

            <div className="mt-2">
              <FormControl
                className="MuiFormControl-fullWidth"
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password *"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
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
                // onClick={() => navigate("/dashbord")}
                onClick={AdminLogin}
              >
                Log in As Admin
              </Button>
            </div>
            {/* <div
              className="text-info hover_cursor  mb-3"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </div> */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Login;
