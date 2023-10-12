import React from "react";
import "../widgets/widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widgets = ({ type }) => {
  let data;
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <Person2OutlinedIcon
            className="icon"
            style={{
              color: "crimson"
            }}
          />
        )
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "see all orders",
        icon: (
          <ShoppingCartCheckoutOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod"
            }}
          />
        )
      };
      break;

    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net earnings",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{
              color: "green"
            }}
          />
        )
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "darkorange"
            }}
          />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="tittle">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}{" "}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {percentage}% <KeyboardArrowUpOutlinedIcon />
        </div>
        <div className="icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widgets;
