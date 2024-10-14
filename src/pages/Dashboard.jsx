import Header from "../components/Dashboard/Header";
import SideBar from "../components/Dashboard/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-100 gap-3 py-1">
      <div className="bg-[#3d464d] w-[70px] md:w-1/5 min-h-screen text-white rounded">
        <SideBar />
      </div>
      <div className="w-full flex flex-col gap-3 rounded">
        <div className="rounded shadow">
          <Header />
        </div>
        <div className="h-full rounded py-3 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
