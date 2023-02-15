
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
                    <MenuItem onClick={() => navigate("/vendordasbord")}>Dashboard</MenuItem>
                     {/* <MenuItem title="User" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/vendor-dailyrequest")}>  </MenuItem> */}
                     <MenuItem title="User" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/vendor-daily-delivery")}>Daily update</MenuItem>
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/vendor-history")}> History </MenuItem>
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/vendor-notification")}> Notification</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/update-done-work")}> Update Work Done</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/confirmation")}> Total Completed Tasks</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/completed-tasks")}> Confirm Completed Tasks</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/customer-management")}> Customers manage system.</MenuItem>                   
                     <MenuItem title="Daily Request (booking)" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/services-categories")}> Services/Categories.</MenuItem>                   
                                                
                     <SubMenu title="Setting" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/vendor-accountsetting")}>Profile Settings</MenuItem>                            {/* <MenuItem onClick={() => navigate("/help")}>Help and Support</MenuItem> */}
                            <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>                      
                    </SubMenu>

                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;
