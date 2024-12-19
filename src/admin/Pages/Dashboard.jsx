import React, { useEffect } from "react";
import AdminPanel from "../Components/Dashboard/AdminPanel";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    !document.cookie.includes("adminToken") && Navigate("/admin/login");
  }, []);
  return (
    <>
      <AdminPanel />
    </>
  );
};

export default Dashboard;
