import React from "react";
import "./List.scss";
import Navbar from "./../../components/navbar/Navbar";
import Sidebar from "./../../components/sidebar/Sidebar";
import Data from "./../../components/datatabel/Data";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listcontainer">
        <Navbar />
        <div datatabel>
          <Data />
        </div>
      </div>
    </div>
  );
};

export default List;
