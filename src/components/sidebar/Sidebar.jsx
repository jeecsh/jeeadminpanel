import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">JecAdmin</span>
      </div>
      <hr />
      <div className="center">
        {" "}
        <ul>
          <p className="tittle">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="tittle">Lists</p>
          <li>
            <PeopleOutlineOutlinedIcon className="icon" />
            <span>
              <link rel="stylesheet" href="/users" />
              users
            </span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>product</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>delivery</span>
          </li>
          <p className="tittle">Usefull</p>
          <li>
            <LeaderboardIcon className="icon" />
            <span>stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>notification</span>
          </li>
          <p className="tittle">Servise</p>
          <li>
            <SettingsSuggestOutlinedIcon className="icon" />
            <span>system health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>settings</span>
          </li>
          <p className="tittle">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroptions"> </div>
        <div className="coloroptions"> </div>
      </div>
    </div>
  );
};

export default Sidebar;
