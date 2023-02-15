import React, { useState } from 'react';

//material ui appbar
import { AppBar, Toolbar } from "@material-ui/core";
import sikhlo from "../../Image/shopping.jpg"
import sikhlo2 from "../../Image/shopping.jpg"


//css file
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    console.log("header props", props)

    const removeToken = (token) => {
        localStorage.clear();     
    };




    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }

    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                        
                    <div className="d-flex">
                    <span className='pr-3'><img src={sikhlo} alt="" height="50" /></span>
                        <span className="toggle_button_sidebar mt-2">
                            <i className="fa fa-bars mr-2"
                                onClick={() => {
                                props.setLoading();
                            }}>
                            </i></span>
                        <span className='pl-3 mt-1' style={{color:"#b0dd36"}}><h4>Admin Panel</h4></span>
                    </div>

                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="d-flex " >
                       
                        <div className='pr-4'>
                        <div className='search_pcaceholder'>
                              <input form='form-control ' type="pcaceholder" placeholder='Search...'/><i className="fa fa-search search_barclass" ></i>
                            </div>
                            </div>
            
                           
                          

                            <div className="dropdown " style={{cursor: 'pointer'}}>
                                <div data-toggle="dropdown">  <i className="fa fa-power-off mt-2" style={{fontSize:"23px"}} aria-hidden="true"></i>
                                </div>
9<div className="dropdown-menu animate slideIn dopdown_formatting">
                                    <div className="dropdownLinks p-2" onClick={() => navigate("/")}>
                                        <span><i className="fa fa-cog mr-3" />Change Password</span>
                                    </div>
                                    <hr />
                                    <Link to='/'>
                                    <div className="dropdownLinks p-2 mt-1" onClick={() => localStorage.clear()} style={{textDecoration: 'none',}}>
                                        <span ><i className="fa fa-sign-out mr-3" />LogOut</span>
                                    </div>
                                    </Link>
                                    
                                </div>
                            </div>
                        </span>

                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i className="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    className="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <div className="text-center">
                                {/* <img src={sikhlo} alt="" /> */}
                            </div>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/dashboard")}>
                                Dashboard
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/uers")}>
                            Users Information
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/vendor")}>
                            Driver Information
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/admin-notificatin")}>
                            Push-Notifaction

                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/goodsType")}>
                            Goods Type
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/vehicletype")}>
                            Vehicle Type
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/vehicle-list")}>
                            All Vehicle
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/coupons")}>
                            Coupons
                            </span>

                            


                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Change Password
                            </span>

                            <Link to='/'>
                            <span className="logout_Pointer_cursor mt-2" onClick={()=>localStorage.clear() }>
                                Log Out
                            </span>
                            </Link>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
