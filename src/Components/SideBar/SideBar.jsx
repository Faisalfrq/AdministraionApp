import React from 'react'
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>Management System</h2>
      <ul>
        <li>
          <Link to="/show-data">Show Data</Link>
        </li>
        <li>
          <Link to="/add-record">Add Record</Link>
        </li>
        <li>
          <Link to="/delete-record">Delete Record</Link>
        </li>
        <li>
          <Link to="/update-record">Update Record</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;