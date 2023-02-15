/** @format */

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const removeToken = (token) => {
    localStorage.clear();
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar_in_mobile_view">
        <ProSidebar collapsed={props.isloading}>
          <Menu iconShape="circle">
            {/* <MenuItem onClick={() => navigate("/dashbord")}>Dashboard</MenuItem> */}
            <MenuItem
              title="DashBord"
              onClick={() => navigate("/dashbord")}
              icon={<DashboardTwoToneIcon />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              title="Users"
              onClick={() => navigate("/user")}
              icon={<DashboardTwoToneIcon />}
            >
              Users
            </MenuItem>
            <MenuItem
              title="Drivers"
              onClick={() => navigate("/Drivers")}
              icon={<DashboardTwoToneIcon />}
            >
              Drivers
            </MenuItem>
            <MenuItem
              title="Vehicle"
              onClick={() => navigate("/vehicle")}
              icon={<DashboardTwoToneIcon />}
            >
              Vehicle
            </MenuItem>
            <MenuItem
              title="CompanyCut"
              onClick={() => navigate("/company")}
              icon={<DashboardTwoToneIcon />}
            >
              Company
            </MenuItem>
            <MenuItem
              title="Privacy"
              onClick={() => navigate("/privacy")}
              icon={<DashboardTwoToneIcon />}
            >
              Privacy
            </MenuItem>
            <MenuItem
              title="Info"
              onClick={() => navigate("/info")}
              icon={<DashboardTwoToneIcon />}
            >
              Support-Info
            </MenuItem>
            <MenuItem
              title="Term&Condition"
              onClick={() => navigate("/term")}
              icon={<DashboardTwoToneIcon />}
            >
              Term&Condition
            </MenuItem>
            <MenuItem
              title="Notification"
              onClick={() => navigate("/notify")}
              icon={<DashboardTwoToneIcon />}
            >
              Notify User
            </MenuItem>
            <MenuItem
              title="Penalty"
              onClick={() => navigate("/penalty")}
              icon={<DashboardTwoToneIcon />}
            >
              Penalty
            </MenuItem>
            <MenuItem
              title="Notification"
              onClick={() => navigate("/notifyD")}
              icon={<DashboardTwoToneIcon />}
            >
              Notify Driver
            </MenuItem>
            <SubMenu title="Setting" icon={<SettingsOutlinedIcon />}>
              <MenuItem onClick={() => navigate("/admin-profile")}>
                Profile Settings
              </MenuItem>
              <Link to="/">
                <MenuItem onClick={removeToken}>Logout</MenuItem>
              </Link>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
