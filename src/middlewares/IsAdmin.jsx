import { Navigate, Outlet } from "react-router-dom";

const IsAdmin = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return token && user?.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default IsAdmin;
