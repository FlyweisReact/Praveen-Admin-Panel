import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
    faLaptopHouse,
    faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                    <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
                        <SubMenu title="Products" icon={<FontAwesomeIcon icon={faPeopleArrows} />}>
                            <MenuItem onClick={() => navigate("/all-product")}>Total Products</MenuItem>
                            <MenuItem onClick={() => navigate("/add-product")}>Add Products</MenuItem>          
                        </SubMenu>
                        <MenuItem title="Orders" onClick={() => navigate("/all-order")} icon={<FontAwesomeIcon icon={faFile} />}>
                           Orders
                        </MenuItem>
                        <MenuItem title="Orders" onClick={() => navigate("/banners")} icon={<FontAwesomeIcon icon={faFile} />}>
                           Banner
                        </MenuItem>
                        <MenuItem title="Orders" onClick={() => navigate("/payout")} icon={<FontAwesomeIcon icon={faFile} />}>
                           Payout
                        </MenuItem>
                        <MenuItem title="Orders" onClick={() => navigate("/review-and-rating")} icon={<FontAwesomeIcon icon={faFile} />}>
                          Review and Rating
                        </MenuItem>
                        <MenuItem title="Orders" onClick={() => navigate("/add-to-cart")} icon={<FontAwesomeIcon icon={faFile} />}>
                         Add To cart
                        </MenuItem>

                        <SubMenu title="User" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/users")}>User Details</MenuItem>
                            <MenuItem onClick={() => navigate("/newuser")}>New Users</MenuItem>                                               
                        </SubMenu>
                     <MenuItem title="User" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/categorie")}> Categories </MenuItem>
                     <MenuItem title="User" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/subcategories")}> Sub-Categories </MenuItem>
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/daily-request")}> Daily Request </MenuItem>
                     {/* <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/delivery-partner")}> Delevery Partner</MenuItem>                    */}
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/dailyItemsDelivery")}> Daily Delivery Items</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/payment-getway")}> Payment-Gateway</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/statistics")}> Reports</MenuItem>                   
                     {/* <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/history")}> History</MenuItem>                    */}
                     {/* <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/subscriptions")}> Subscription</MenuItem>                    */}
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/delivery")}> Delivery</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/complain")}> Complains</MenuItem>                   
                     {/* <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/report")}> Reports</MenuItem>                    */}
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/commissins")}>Comissions List</MenuItem>                                    
                     <SubMenu title="Setting" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/userprofile")}>Profile Settings</MenuItem>
                            {/* <MenuItem onClick={() => navigate("/terms-conditions")}>Terms & Condition</MenuItem>
                            <MenuItem onClick={() => navigate("/privacypolicy")}>Privacy Policy</MenuItem> */}
                            {/* <MenuItem onClick={() => navigate("/help")}>Help and Support</MenuItem> */}
                            <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>                      
                        </SubMenu>

                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;