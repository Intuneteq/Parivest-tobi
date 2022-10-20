import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  
  return (
    <div className="app__flex-3 admin">
      <div className="side-nav">
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
